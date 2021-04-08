import React, { Component } from "react";
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import firebase from 'firebase'
import 'firebase/auth'
class HomePage extends Component {
  state = { search: "", user:{} };

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({ user })
      }
    })
  }

  searchingMovie = (e) => {
    e.preventDefault()
    this.props.history.push(`/search?${this.state.search}`)
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  ToSeries = (id) =>{
    this.props.history.push(`/SerieDetails?${id}`)
  }
  ToMovies = (id) =>{
    this.props.history.push(`/MovieDetails?${id}`)
  }
  
 
  ToAll = (type) =>{
   this.props.history.push(`/All/?${type}`)
}

  render() {
    return (
      <div className="App">
        <Header sendInfo={this.searchingMovie}
        search={this.state.search}
        onChange={this.handleSearch}/>

        <Categories title="Top Movies">
          <Carousel userInfo={this.state.user} type="movie" onClick = {this.ToMovies} toAll = {this.ToAll}/>
        </Categories>
        <Categories title="Top Tv Shows">
          <Carousel userInfo={this.state.user} type="tv" onClick = {this.ToSeries} toAll = {this.ToAll}/>
        </Categories>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
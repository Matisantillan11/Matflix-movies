import React, { Component } from 'react'
import Header from '../Components/Header';
import SearchingMovie from '../Components/SearchingMovie';

import firebase from 'firebase'
import 'firebase/auth'
class SearchMoviePage extends Component{
  state={
    search: "",
    user:''
  }
  
  componentDidMount(){
   let searcher = this.props.history.location.search.substr(1).replace("%20", " ");
    this.setState({ search: searcher })

    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({ user })
      }
    })
  }

  ToMovies = (id) =>{
    this.props.history.push(`/MovieDetails?${id}`)
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
  render(){
      return(
        <>
          <Header sendInfo={this.searchingMovie}
                search={this.state.search}
                onChange={this.handleSearch}/>
          <SearchingMovie onClick={this.ToMovies} 
          search={this.state.search}
          userInfo={this.state.user}/>
        </>
      )
  }
}

export default SearchMoviePage;
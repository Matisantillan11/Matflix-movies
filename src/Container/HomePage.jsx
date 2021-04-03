import React, { Component } from "react";
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


class HomePage extends Component {
  state = { search: "" };
  sendingInfo = (e) => {
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
  

  render() {
    return (
      <div className="App">
        <Header sendInfo={this.sendingInfo}
        search={this.state.search}
        onChange={this.handleSearch}/>

        <Categories title="Top Movies">
          <Carousel type="movie" onClick = {this.ToMovies} />
        </Categories>
        <Categories title="Top Tv Shows">
          <Carousel type="tv" onClick = {this.ToSeries}/>
        </Categories>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
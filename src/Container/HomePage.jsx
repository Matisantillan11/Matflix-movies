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

  handleClick = (id) =>{
    
    this.props.history.push(`/movies?${id}`)
  }
  

  render() {
    return (
      <div className="App">
        <Header sendInfo={this.sendingInfo}
        search={this.state.search}
        onChange={this.handleSearch}/>

        <Categories title="Top Movies">
          <Carousel type="movie" onClick = {this.handleClick} />
        </Categories>
        <Categories title="Top Tv Shows">
          <Carousel type="tv" onClick = {this.handleClick}/>
        </Categories>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
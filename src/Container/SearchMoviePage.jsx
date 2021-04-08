import React, { Component } from 'react'
import Header from '../Components/Header';
import SearchingMovie from '../Components/SearchingMovie';

import firebase from 'firebase'
import 'firebase/auth'
class SearchMoviePage extends Component{
  
  state={
    loading:true,
    error:false,
    API_KEY:'76ea301b5b0a49273c1693f3ec685b25',
    search: "",
    user:'',
    data:{
        results:[]
    }
  }

  componentDidMount(){
   let searcher = this.props.history.location.search.substr(1).replace("%20", " ");
    this.setState({ search: searcher })
    this.fetchMovie(`https://api.themoviedb.org/3/search/movie?query=${searcher}&api_key=${this.state.API_KEY}`)
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({ user })
      }
    })
  }





fetchMovie = async url =>{

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (data.error){
      this.setState({
        loading: false,
        error: true,
        errorMessage : 'Movie not found'
    })
    }else{
      this.setState({
        error: false,
        loading: false,
        data: {
          results: data.results
        }
    })
    }
}

  ToMovies = (id) =>{
    this.props.history.push(`/MovieDetails?${id}`)
  }
  
  
  searchingMovie = (e) => {
    e.preventDefault()
    this.fetchMovie(`https://api.themoviedb.org/3/search/movie?query=${this.state.search}&api_key=${this.state.API_KEY}`)
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
          userInfo={this.state.user}
          dataMovie={this.state.data.results}/>
        </>
      )
  }
}

export default SearchMoviePage;
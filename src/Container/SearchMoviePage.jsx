import React, { Component } from 'react'
import '../assets/styles/components/SearchMoviePage.css'
import Header from '../Components/Header';
import SearchingMovie from '../Components/SearchingMovie';
import CarouselItem from '../Components/CarouselItem';
class SearchMoviePage extends Component{
  state={
    search: "",
    
  }
  
  componentDidMount(){
   /*  let searcher = this.props.history.location.search.substr(1).replace("%20", " ");
    console.log(searcher)
    this.setState({search: searcher}) */
  }
    /* fetchDetails = async () =>{
      this.setState({loading: true})
      const response = await fetch(`https://api.themoviedb.org/3/movie/${this.state.data.results[0].id}?api_key=${this.state.API_KEY}&language=en-US`)
      const data = await response.json()
      
      if(data.errors){
          this.setState({
              loading: false,
              error: true,
              errorMessage : 'Artist not found'
          })
      }
      else{
          
          this.setState({
              error: false,
              loading: false,
              data: data
          })
      }
  } */
  render(){
      return(
        <>
          <Header />
          <SearchingMovie search={this.state.search}/>
                {/* <div className="main_movie_container">
                  <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt={this.state.data.original_title}/>
                  <div className="movie-information__container">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.overview}</p>
                    {this.state.data.genres.map(genre=>(
                      <p key={genre.id}>Genre: {genre.name}</p>
                    ))} 
                  </div>
                </div> */}
        </>
      )
  }
}

export default SearchMoviePage;
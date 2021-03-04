import React, { Component } from 'react'
import '../assets/styles/components/SearchMoviePage.css'
import Header from '../Components/Header';
class SearchMoviePage extends Component{
  state={
    search: "",
    loading: false,
    error:false,
    API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
    data: {
      genres:[{}]
    }
  }
  
  componentDidMount(){
    let searcher = this.props.history.location.search.substr(1).replace("%20", " ");
    this.setState({search: searcher})
    this.fetchData()
  }

  fetchData = async () =>{
    this.setState({loading: true})
    const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.state.API_KEY}&language=en-US`)
    const data = await response.json()
    
    if(data.artists === null){
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
}
  render(){
      return(
        <>
          <Header />
          <h1>{this.state.search}</h1>
                <div className="main_movie_container">
                  <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt={this.state.data.original_title}/>
                  <div className="movie-information__container">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.overview}</p>
                    {this.state.data.genres.map(genre=>(
                      <p key={genre.id}>Genre: {genre.name}</p>
                    ))}
                  </div>
                </div>
        </>
      )
  }
}

export default SearchMoviePage;
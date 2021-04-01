import React, { Component } from 'react'

import Header from '../Components/Header'
import MovieDetails from '../Components/MovieDetails'
import SimilarMovie from '../Components/SimilarMovies'

class MovieDetailsPage extends Component{

    state={}
    state = {
        loading: false,
        error:false,
        movieId: '',
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: {          
            poster_path:'',
            genres:[{}],
            original_title:'',
            title: '',
            overview: '',
            popularity: '',
            release_date: '',
            runtime: '',
            vote_average: '',
            vote_count: ''
        }
    }

    componentDidMount(){
        const movieId = this.props.history.location.search.substr(1)
        this.setState({movieId})
        this.fetchData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.state.API_KEY}&language=es`)
    }

    fetchData = async url =>{
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if(data === null){
            this.setState({
                loading: false,
                error: true,
                errorMessage : 'Movie not found'
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

    handleClick = (id) =>{
        this.props.history.push(`/movies?${id}`)
        window.location.replace('')
      }

    render(){
        return(
           <>
           <Header />
           <MovieDetails
            poster={this.state.data.poster_path}
            title={this.state.data.title}
            originalTitle={this.state.data.original_title}
            genres= {this.state.data.genres}
            overview={this.state.data.overview}
            popularity={this.state.data.popularity}
            releaseDate={this.state.data.release_date}
            runtime={this.state.data.runtime}
            voteAverage= {this.state.data.vote_average}
            voteCount={this.state.data.vote_count}
           />
           <SimilarMovie MovieID={this.state.movieId} onClick={this.handleClick}/>
           </>
        )
    }
}
export default MovieDetailsPage
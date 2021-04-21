import React, { Component } from 'react'

import Header from '../Components/Header'
import MovieDetails from '../Components/MovieDetails'
import SimilarMovie from '../Components/SimilarMovies'

import firebase from 'firebase'
import 'firebase/auth'
class MovieDetailsPage extends Component{

  
    state = {
        user: undefined,
        loading: false,
        error:false,
        movieId: '',
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: { 
                id:'',
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
            
        },
        similars:{
            results:[{}]
        }        
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
              this.setState({ user })
            }
          })

        const movieId = this.props.history.location.search.substr(1)
        this.setState({movieId})
        this.fetchData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.state.API_KEY}&language=es`)
        this.fetchDataSimilar(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.state.API_KEY}&language=es`)
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

    fetchData = async (url) =>{
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        
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

    fetchDataSimilar = async (url) => {
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.similars === ''){
            this.setState(
                {
                    loading: false,
                    error: true,
                    errorMessage: 'Movies not found'
                }
            )
        }else{
            this.setState(
                {
                error: false,
                loading: false,
                similars: data
                }
            )
        }
    }

    handleClick = (id) =>{
        this.props.history.push(`/MovieDetails?${id}`)
        window.location.replace('')
      }

    render(){
        return(
           <>
           <Header sendInfo={this.searchingMovie}
            search={this.state.search}
            onChange={this.handleSearch}/>
           <MovieDetails
            id={this.state.data.id}
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
            infoUser={this.state.user}
           />
           
            <SimilarMovie data= {this.state.similars.results}
            MovieID={this.state.movieId}
            userData={this.state.user}
            onClick={this.handleClick}/>
           
           </>
        )
    }
}
export default MovieDetailsPage
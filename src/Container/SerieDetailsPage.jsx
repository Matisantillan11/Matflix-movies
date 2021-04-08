import React, { Component } from 'react'

import Header from '../Components/Header'
import SerieDetails from '../Components/SerieDetails'
import SimilarSerie from '../Components/SimilarSerie'

class MovieDetailsPage extends Component{

    state = {
        loading: false,
        error:false,
        serieId: '',
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: { 
                poster_path:'',
                genres:[{}],
                original_name:'',
                name: '',
                overview: '',
                popularity: '',
                first_air_date: '',
                runtime: '',
                vote_average: '',
                vote_count: '',
                number_of_episodes:'',
                number_of_seasons:'',
                tagline:''
            
        },
        similars:{
            results:[{}]
        },
        search: ''    
    }

    componentDidMount(){
        const serieId = this.props.history.location.search.substr(1)
        console.log(serieId)
        this.setState({serieId})
        this.fetchData(`https://api.themoviedb.org/3/tv/${serieId}?api_key=${this.state.API_KEY}&language=es`)
        this.fetchDataSimilar(`https://api.themoviedb.org/3/tv/${serieId}/similar?api_key=${this.state.API_KEY}&language=es`)
    }

    fetchData = async (url) =>{
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        
        if(data === null){
            this.setState({
                loading: false,
                error: true,
                errorMessage : 'Serie not found'
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
                    errorMessage: 'Serie not found'
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
        this.props.history.push(`/SerieDetails?${id}`)
        window.location.replace('')
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
            <SerieDetails
            poster={this.state.data.poster_path}
            title={this.state.data.name}
            originalTitle={this.state.data.original_name}
            genres= {this.state.data.genres}
            overview={this.state.data.overview}
            popularity={this.state.data.popularity}
            releaseDate={this.state.data.first_air_date}
            voteAverage= {this.state.data.vote_average}
            voteCount={this.state.data.vote_count}
            seasons={this.state.data.number_of_seasons}
            episodes={this.state.data.number_of_episodes}
            tagline={this.state.data.tagline}
           />
           
            <SimilarSerie data= {this.state.similars.results} MovieID={this.state.serieId} onClick={this.handleClick}/>
           
           </>
        )
    }
}
export default MovieDetailsPage
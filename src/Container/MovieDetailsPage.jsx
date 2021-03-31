import React, { Component } from 'react'

import '../assets/styles/containers/MovieDetailsPage.css'
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
            vote_average: ''

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

    toHour = (minutes) => {
        let hour, minute;

        if ( minutes < 60 ){
            return <p>{minute}min</p>
        } else {
            hour = Math.floor(minutes / 60).toFixed() 
            minute = minutes % 60
            return <p>{hour}h {minute}min</p>
        }
    }

    render(){
        return(
            <div className="movieDetails_Container">
                <div className="movieDetails_imageContainer">
                    <img className="movieDetails_image"src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt=""/>
                </div>
                <div className="movieDetails_descriptionContainer">
                    <p className="movieDetails_title">{this.state.data.title}</p>
                    <p className="movieDetails_realTitle">{this.state.data.original_title}</p>
                    <div className="rateMovie_container">
                        <span className="rateMovie_rater">{(Math.round(this.state.data.popularity)/100).toFixed(1)}%</span>
                        {this.toHour(this.state.data.runtime)}
                        <p>{this.state.data.release_date.substr(0,4)}</p>
                    </div>
                    <div>
                        <p className="movieDetails_description">{this.state.data.overview}</p>
                        <span className="movieDetails_genres">Generos: 
                        {this.state.data.genres.map((genre, i) =><p key={genre.i}>{genre.name }, </p>)} </span >
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieDetailsPage
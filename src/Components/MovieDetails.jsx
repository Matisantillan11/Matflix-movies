import React,{ Component } from 'react'

import RateStar from '../Components/RateStar'

import '../assets/styles/components/MovieDetails.css'

class MovieDetails extends Component{
    
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
                    <img className="movieDetails_image"src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt=""/>
                
                    <div className="addto_container">
                        <select name="add" id="add">
                            <option>Agregar a</option>
                            <option>Favoritos</option>
                            <option>Ver más tarde</option>
                        </select>
                        
                    </div>
                </div>
                <div className="movieDetails_descriptionContainer">
                    <p className="movieDetails_title">{this.props.title}</p>
                    <p className="movieDetails_realTitle">{this.props.originalTitle}</p>
                    <div className="movieDetails_bonusContainer">
                        <div className="rateMovie_container">
                            <div className="rateMovie_rater"><span>{(Math.round(this.props.popularity)/100).toFixed(1)}%</span></div>
                            <div>
                                <div className="rateStars_container">
                                    <RateStar/>
                                    <RateStar/>
                                    <RateStar/>
                                    <RateStar/>
                                    <RateStar/>
                                </div>
                                <div className="rate_information">
                                    <p>{this.props.voteCount} votos. Promedio: {this.props.voteAverage} de 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_timeDetails">
                            <p>{this.toHour(this.props.runtime)}</p>
                            <p>{this.props.releaseDate.substr(0,4)}</p>
                        </div>
                    </div>
                    <div>
                        <p className="movieDetails_description">{this.props.overview}</p>
                        <span className="movieDetails_genres">Generos: 
                        {this.props.genres.map((genre, i) =><p key={genre.i}>{genre.name }, </p>)} </span >
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails
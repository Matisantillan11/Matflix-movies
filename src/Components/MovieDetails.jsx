import React,{ Component } from 'react'

import RateStar from '../Components/RateStar'

//firebase
import firebase from "firebase/app";
import 'firebase/firestore'

//swal
import Swal from 'sweetalert2'

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

    addToFavoriteMethod = () =>{
        const db = firebase.firestore()
        const docRef = db.collection("Favorites").doc(`${this.props.infoUser.uid}`)
        let data = {
            movieId: this.props.id,
            poster: this.props.poster,
            title: this.props.title
        } 

        docRef.get().then(doc =>{
            if(doc.exists){
                docRef.update({
                    movies: firebase.firestore.FieldValue.arrayUnion(data)
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        text: 'Favoritos actualizados 💯'
                    })
                }).catch(error =>{
                    Swal.fire({
                        icon:"error",
                        text: `Error: ${error.message}`
                    })
                })
            } else{
                docRef.set( {
                    movies: [data]
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        text: 'Agregado a favoritos 💯'
                    })
                }).catch(error =>{
                    Swal.fire({
                        icon:"error",
                        text: `Error: ${error.message}`
                    })
                })
            }
        })
    }

    addToFavoriteCombo = () =>{
        const list = document.getElementById("add");
        const selected = list.options[list.selectedIndex];
        
        if (selected.value === "Favoritos"){
            this.addToFavoriteMethod()
        } else {
            Swal.fire({
                icon:'error',
                text: 'Por favor, seleccione una opción correcta ❌'
            })
        } 
    }

    render(){
        return(

            <div className="movieDetails_Container">
                <div className="movieDetails_imageContainer">
                    <img className="movieDetails_image"src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt=""/>
                
                    <div className="addto_container">
                        <select onChange = {this.addToFavoriteCombo} name="add" id="add">
                            <option disabled selected>Agregar a</option>
                            <option>Favoritos</option>
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
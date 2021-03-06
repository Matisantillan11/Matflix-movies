import React, { Component } from 'react'

import Add from '../assets/images/icons/plus.png'
import Play from '../assets/images/icons/play.png'

//firebase
import firebase from "firebase/app";
import 'firebase/firestore'

//swal
import Swal from 'sweetalert2'

import '../assets/styles/components/CarouselItems.css'



class CarouselItem extends Component{ 
    
    AddToFavorite = () =>{
        const db = firebase.firestore()
        console.log(this.props.infoUser)
        if(this.props.infoUser !== undefined){
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
        } else {
            Swal.fire({
                icon:"error",
                text: `Por favor, ingrese sesión antes para agregar esta pelicula a tus favoritos!`
            })
        }
        
    }
    
    render(){
        return(
            <div className="carousel-items" >
                <img className="carousel-item__image" src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} />
                <div className="carousel-item__description">
                    <div>
                        <img src={Play} alt="Reproducir" onClick = {()=>this.props.infoMovie( this.props.id)}/>
                        <img src={Add} alt="Agregar" onClick = {this.AddToFavorite}/>
                    </div>  
                    <p className="carousel-item__description--title">{this.props.title}</p>
                    {/* <p className="carousel-item__description--subtitle">{duration} {time}</p> */}
                </div>
            </div>
        )
    }
}

export default CarouselItem
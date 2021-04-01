import React, { Component } from 'react'

import Add from '../assets/images/icons/plus.png'
import Play from '../assets/images/icons/play.png'

import '../assets/styles/components/CarouselItems.css'



class CarouselItem extends Component{ 
    
    render(){
        return(
            <div className="carousel-items" onClick = {() =>this.props.infoMovie(this.props.id)}>
                <img className="carousel-item__image" src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} />
                <div className="carousel-item__description">
                    <div>
                        <img src={Play} alt="Reproducir" onClick = {()=>this.props.infoMovie( this.props.id)}/>
                        <img src={Add} alt="Agregar" />
                    </div>  
                    <p className="carousel-item__description--title">{this.props.title}</p>
                    {/* <p className="carousel-item__description--subtitle">{duration} {time}</p> */}
                </div>
            </div>
        )
    }
}

export default CarouselItem
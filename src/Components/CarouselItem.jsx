import React from 'react'
import PropTypes from 'prop-types'

import Add from '../assets/images/icons/plus.png'
import Play from '../assets/images/icons/play.png'

import '../assets/styles/components/CarouselItems.css'
const CarouselItem = ({ poster, title, duration, time }) => (
    <div className="carousel-items">   
        <img className="carousel-item__image" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        <div className="carousel-item__description">
            <div>
                <img src={Play} alt="Reproducir" />
                <img src={Add} alt="Agregar" />
            </div>
            <p className="carousel-item__description--title">{title}</p>
            {/* <p className="carousel-item__description--subtitle">{duration} {time}</p> */}
        </div>
    </div>
)

export default CarouselItem
import React, { Component } from 'react'
import CarouselItem from './CarouselItem'

import '../assets/styles/components/SimilarMovies.css'

class SimilarMovie extends Component{
   
    render(){
        return(
            <div className="similarMovies_container">
                <h1>Peliculas Similares</h1>
                <div>
                    {this.props.data.slice(0,4).map((similar, i) =>(
                        <CarouselItem
                        key={i}
                        infoMovie={this.props.onClick}
                        poster={similar.poster_path}
                        title={similar.title}
                        description={similar.overview}
                        id={similar.id}
                        infoUser = {this.props.userData}
                        />
                        
                        ))}
                </div>
            </div>
        )
    }
}

export default SimilarMovie
import React, { Component } from 'react'
import CarouselItem from './CarouselItem'

import '../assets/styles/components/SimilarMovies.css'

class SimilarSerie extends Component{
   
    render(){
        return(
            <div className="similarMovies_container">
                <h1>Series Similares</h1>
                <div>
                    {this.props.data.slice(0,4).map((similar, i) =>(
                        <CarouselItem
                        key={i}
                        infoMovie={this.props.onClick}
                        poster={similar.poster_path}
                        title={similar.name}
                        description={similar.overview}
                        id={similar.id}/>
                        ))}
                </div>
            </div>
        )
    }
}

export default SimilarSerie
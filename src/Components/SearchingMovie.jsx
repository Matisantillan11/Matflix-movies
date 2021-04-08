import React, { Component } from 'react'
import CarouselItem from './CarouselItem'

import '../assets/styles/components/SearchMovie.css'
class SearchingMovie extends Component{
    
  
    render(){
        return(
            <>
                
                <div className="search_page">
                    {this.props.dataMovie.map(movie =>(
                        
                            <CarouselItem 
                            key={movie.id} 
                            poster={movie.poster_path ||'/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'} 
                            id={movie.id}
                            title={movie.title || movie.name} 
                            description={movie.overview}
                            infoMovie = {this.props.onClick}
                            infoUser={this.props.userInfo} />
                        
                        ))}
                </div>
            </>
        )
    }
}
export default SearchingMovie
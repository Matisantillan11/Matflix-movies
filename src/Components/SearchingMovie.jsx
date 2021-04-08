import React, { Component } from 'react'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

import '../assets/styles/components/SearchMovie.css'
class SearchingMovie extends Component{
    state={
        loading:true,
        error:false,
        API_KEY:'76ea301b5b0a49273c1693f3ec685b25',
        data:{
            results:[{}]
        }
    }


    componentWillReceiveProps(e){
        const movie= e.search
        this.fetchMovie(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${this.state.API_KEY}`)
    }

    fetchMovie = async url =>{

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.error){
          this.setState({
            loading: false,
            error: true,
            errorMessage : 'Movie not found'
        })
        }else{
          this.setState({
            error: false,
            loading: false,
            data: data
        })
        }
      }
  
    render(){
        return(
            <>
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <div className="search_page">
                    {this.state.data.results.map(movie =>(
                        
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
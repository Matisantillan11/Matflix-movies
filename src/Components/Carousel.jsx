import React, { Component } from 'react'

import '../assets/styles/components/Carousel.css'
import CarouselItem from './CarouselItem'
class Carousel extends Component {
    state={
        loading: true,
        error: false,
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: {
            results: [{}]
        }
    }

    componentDidMount(){
        this.fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${this.state.API_KEY}&language=en-US&page=1`)
    }

    fetchData = async (url) => {
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()

        if (data.error){
            this.setState(
                {
                    loading: false,
                    error: true,
                    errorMessage: 'Movies not found'
                }
            )
        }else{
            this.setState(
                {
                error: false,
                loading: false,
                data: data
                }
            )
        }
    }


    render(){
        return(
            <section className="carousel">
                <div className="carousel__container">
                    {this.state.data.results.map( movie =>{
                        return <CarouselItem 
                        key={movie.id}
                        title={movie.title} 
                        description={movie.overview}
                        poster={movie.poster_path} />
                    })}
                </div>
            </section >    
        )
    }
}


export default Carousel;
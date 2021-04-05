import React, { Component } from 'react'

import CarouselItem from './CarouselItem'

import '../assets/styles/components/Carousel.css'
import '../assets/styles/components/SeeAllCard.css'
class Carousel extends Component {
    state={
        loading: true,
        error: false,
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: {
            results: [{}]
        },
    }

    

    componentDidMount(){
        this.fetchData(`https://api.themoviedb.org/3/${this.props.type}/popular?api_key=${this.state.API_KEY}&language=en-US&page=${this.state.page}`)
    }

    fetchData = async (url) => {
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
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
            <>
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <section className="carousel">
                    <div className="carousel__container">
                        {this.state.data.results.slice(0, this.props.slice ? this.props.slice : 10).map( (movie, i) =>{
                            return <CarouselItem 
                            key={i}
                            id={movie.id}
                            title={movie.title || movie.name} 
                            description={movie.overview}
                            poster={movie.poster_path}
                            infoMovie = {this.props.onClick}
                            />
                        })}
                        <div className="seeAll_card" onClick={()=>this.props.toAll(this.props.type)}>
                            <div className="seeAll_containerText">
                                <p>All</p>
                                <i/>
                            </div>  
                        </div>
                    </div>
                </section >    
            </>
        )
    }
}


export default Carousel;
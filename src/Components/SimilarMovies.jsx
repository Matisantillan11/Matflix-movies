import React, { Component } from 'react'
import Carousel from './Carousel'

import '../assets/styles/components/SimilarMovies.css'

class SimilarMovie extends Component{
    /* state={
        loading: true,
        error: false,
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: {
            results: [{}]
        },
    } */

    /* componentDidMount(){
        this.fetchDataSimilar(`https://api.themoviedb.org/3/${this.props.type}/${this.props.movieID}/similar?api_key=${this.state.API_KEY}&language=en-US&page=${this.state.page}`)
    }
    
    fetchDataSimilar = async (url) => {
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()

        if (data.results === ''){
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
    } */

    render(){
        return(
            <div className="similarMovies_container">
                <h1>Peliculas Parecidas</h1>
                <div>
                    <Carousel type="movie" 
                    slice="4"
                    onClick={this.props.onClick}/>
                </div>
            </div>
        )
    }
}

export default SimilarMovie
import React, { Component } from 'react'
import CarouselItem from "../Components/CarouselItem";
import Header from '../Components/Header';

class All extends Component{
    state={
        loading: true,
        error: false,
        API_KEY: '76ea301b5b0a49273c1693f3ec685b25',
        data: {
            results: []
        },
        page: 1,
        search: ''
    }

    

    componentDidMount(){
        this.fetchData()
    }

    searchingMovie = (e) => {
        e.preventDefault()
        this.props.history.push(`/search?${this.state.search}`)
    };
    
    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
        });
    };

    fetchData = async () => {
        this.setState({loading: true})
        const type = this.props.history.location.search.substr(1)
        const url=`https://api.themoviedb.org/3/${type}/popular?api_key=${this.state.API_KEY}&language=en-US&page=${this.state.page}`;
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
                data: {
                    results: [].concat(this.state.data.results, data.results)
                    },
                    page: this.state.page + 1
                }
            )
        }
    }



    render(){
        return(
            <div>
                <Header sendInfo={this.searchingMovie}
                search={this.state.search}
                onChange={this.handleSearch}/>
                <div style={{
                    width: "80%",
                    margin: "5% auto",
                    paddingLeft: "4.5%"
                    }}>
                    {this.state.loading && <p>Loading....</p>}
                    {this.state.error && <p>Error!</p>}
                    {this.state.data.results.map((movie) =>(
                        <CarouselItem 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title || movie.name} 
                            description={movie.overview}
                            poster={movie.poster_path} />
                                
                    ))}

                    <div style={{
                        width: "250px",
                        border:"1px solid #db7093",
                        padding: "1.5% .5%",
                        textAlign: "center",
                        color: "#db7093",
                        margin:"2.5% auto",
                        cursor: "pointer"
                    }}
                    onClick={this.fetchData}>Ver más</div>
                </div>
            </div>
        )
    }
}
export default All
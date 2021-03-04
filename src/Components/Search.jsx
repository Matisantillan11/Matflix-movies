import React, { Component } from 'react'

import '../assets/styles/components/Search.css'
class Search extends Component{
    render(){

        return(
            <div className="search_section">
            <form onSubmit={this.props.send}>
                <input
                onChange={this.props.onChange} 
                value={this.props.search} 
                className="searcher" 
                type="text" 
                placeholder="Buscar..." />
            </form>
            </div>
        )
    }
}

export default Search
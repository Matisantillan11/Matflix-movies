import React from 'react'
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../Container/HomePage'
import SearchMoviePage from '../Container/SearchMoviePage'
import MovieDetailsPage from '../Container/MovieDetailsPage'
import SerieDetailsPage from '../Container/SerieDetailsPage'
import All from '../Container/All'


const App =  () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/search" component={SearchMoviePage}/>
                <Route exact path="/MovieDetails" component={MovieDetailsPage}/>
                <Route exact path="/SerieDetails" component={SerieDetailsPage}/>
                <Route exact path="/All" component={All}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
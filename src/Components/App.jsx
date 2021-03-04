import React from 'react'
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../Container/HomePage'
import SearchMoviePage from '../Container/SearchMoviePage'
import MovieDetailsPage from '../Container/MovieDetailsPage'

const App =  () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exacth path="/search" component={SearchMoviePage}/>
                <Route exact path="/movie" component={MovieDetailsPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        
        </BrowserRouter>
    )
}

export default App
import React from 'react'

import '../assets/styles/components/Search.css'
function Search() {
    return(
        <section className="search_section">
        <h2 className="search__title">¿Qué quieres ver hoy?</h2>
        <input className="searcher" type="text" placeholder="Buscar..." />
        </section>
    )
}

export default Search
import React from 'react'

import '../assets/styles/components/Carousel.css'
function Carousel ({ children }) {
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section >    
    )
}


export default Carousel;
import React from 'react'

const Slider = ({ sliderList }) => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    {
                        sliderList.map((item, index) => {
                            return (
                                <div className="carousel-item active" data-bs-interval={10000}>
                                    <img src={item.image} className="d-block w-100" alt={item.image} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Discover More...</h5>
                                        <p>the wooboom clothing summer collection is back at half price</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            
            
        </>
    )
}

export default Slider
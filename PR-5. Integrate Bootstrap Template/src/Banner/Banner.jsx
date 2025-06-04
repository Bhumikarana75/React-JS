import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Banner.css";

import React from 'react'

function Banner() {
    return (
        <div className="banner">
            <section className='banner'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner.jpg" width={"100%"}/>
                            <div className="banner-con">
                            <h5> <span>100%</span> Organic Vegetables</h5>
                            <h1>The best way to <br /> stuff your wallet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                            beatae consequuntur.</p>
                            <button><a href="#">Shop Now</a></button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner-2.jpg" width={"100%"} height={"100%"}/>
                            <div className="banner-con2">
                            <h5> <span>100%</span>  Organic Fruits</h5>
                            <h1>Explore fresh & <br /> juicy fruits.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                            beatae consequuntur.</p>
                            <button><a href="#">Shop Now</a></button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <div className="left-img">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/2.png" alt="" srcset="" />
            </div>
            <div className="bowl-img">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/5.png" alt="" srcset="" />
            </div>
            <div className="orange-img">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/4.png" alt="" srcset="" />
            </div>
            <div className="berry-banner-img">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/3.png" alt="" srcset="" />
            </div>
        </div>

    )
}

export default Banner
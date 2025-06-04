import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./News.css";

import React from 'react'

function News() {
    return (
        <div>
            <section className='news'>
                <div className="container">
                    <div className="row">
                        <div className="news-main ">
                            <h5 className='text-center'>Latest News</h5>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>

                           <div className="news-card-main d-flex">
                           <div className="col-4">
                                <div className="card-1">
                                    <div className="card1-con text-left">
                                        <h6>By Admin | Snacks</h6>
                                        <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <span>Read More&nbsp;<i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                    <div className="card1-img">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" alt="" width={"100%"}/>
                                    </div>
                                    <div className="box-1 text-center">
                                        <h4>10<br /> <span>oct</span> </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card-2">
                                    <div className="card2-con text-left">
                                        <h6>By Admin | Food</h6>
                                        <h5>Best guide to Shopping for organic ingredients.</h5>
                                        <span>Read More&nbsp;<i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                    <div className="card2-img">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg" alt="" width={"100%"}/>
                                    </div>
                                    <div className="box-2 text-center">
                                        <h4>09<br /> <span>sep</span> </h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-4">
                                <div className="card-3">
                                    <div className="card3-con text-left">
                                        <h6>By Admin | Snacks</h6>
                                        <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                        <span>Read More&nbsp;<i class="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                    <div className="card3-img">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg" alt="" width={"414px"}/>
                                    </div>
                                    <div className="box-3 text-center">
                                        <h4>12<br /> <span>oct</span> </h4>
                                    </div>
                                </div>
                            </div>
                           </div>

                        </div>
                        <div className="flowe-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/shape-1.png" alt="" srcset="" />
                        </div>
                        <div className="tamoto-2">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/shape-2.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
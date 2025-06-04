import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Categories.css";

import React from 'react'

export const Categories = () => {
    return (
        <div>
            <section className='categories'>
                <div className="container">
                    <div className="row">
                        <div className="categories-main d-flex">
                            <div className="col-4">
                                <div className="button-main text-center">
                                    <div className="button1">
                                        <button><a href="#">Cake & Milk <br /></a><span>(65 items)</span></button>
                                    </div>
                                    <div className="button2">
                                        <button><a href="#"> Fresh Meat <br /></a><span>(30 items)</span></button>
                                    </div>
                                    <div className="button3">
                                        <button><a href="#">Vegetables<br /></a><span>(25 items)</span></button>
                                    </div>
                                    <div className="button4">
                                        <button><a href="#">Apple & Mango<br /></a><span>(45 items)</span></button>
                                    </div>
                                    <div className="button5">
                                        <button><a href="#">Strawberry <br /></a><span>(68 items)</span></button>
                                    </div>
                                    <div className="button6">
                                        <button><a href="#">View More</a></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="categories-img-main d-flex text-center">
                                    <div className="col-6">
                                        <div className="categories-img1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/3.jpg" alt="" srcset="" />
                                            <div className="categories-con1 d-flex">
                                                <div className="categories-50">
                                                    <h6>50</h6>
                                                </div>
                                                <div className="categeries-per">
                                                    <span>%OFF</span>
                                                </div>
                                                <h4 className='text-center'>Cake</h4>
                                                <button><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="categories-img2">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/4.jpg" alt="" srcset="" />
                                            <div className="categories-con2 d-flex">
                                                <div className="categories-502">
                                                    <h6>40</h6>
                                                </div>
                                                <div className="categeries-per2">
                                                    <span>%OFF</span>
                                                </div>
                                                <h4 className='text-center'>Milk</h4>
                                                <button><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mashroom-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/shape/6.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Services.css";

import React from 'react'

function Services() {
    return (
        <div>
            <section className='services'>
                <div className="container">
                    <div className="row">
                        <div className="services-main d-flex">
                            <div className="col-3">
                                <div className="service1 text-center">
                                    <i class="fa-solid fa-suitcase"></i>
                                    <h6>Product Packing</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="service1 text-center">
                                    <i class="fa-solid fa-headphones"></i>
                                    <h6>24X7 Support</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="service1 text-center">
                                <i class="fa-solid fa-truck"></i>
                                    <h6>Delivery in 5 Days</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="service1 text-center">
                                <i class="fa-solid fa-coins"></i>
                                    <h6>Payment Secure</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/7.png" alt="" srcset=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
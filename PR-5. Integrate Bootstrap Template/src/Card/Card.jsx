import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./card.css";
import React from 'react'

function fresh() {
  return (
        <>
        <section className='fresh'>
            <div className="container">
                <div className="row">
                    <div className="fresh-main d-flex justify-content-center text-center">
                        <div className="col-4">
                            <div className="fresh-1">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg" alt="" srcset="" />
                                <div className="fresh1-con text-start">
                                    <h5>Healthy <br /> Bakery Products</h5>
                                    <h6><span>30%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="fresh-2">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg" alt="" srcset="" />
                                <div className="fresh2-con text-start">
                                    <h5>Fresh  <br /> Snacks & Sweets</h5>
                                    <h6><span>20%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="fresh-3">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg" alt="" srcset="" />
                                <div className="fresh3-con text-start">
                                    <h5>Fresh & healthy<br />Organic Fruits</h5>
                                    <h6><span>35%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leaf-img">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/10.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default fresh
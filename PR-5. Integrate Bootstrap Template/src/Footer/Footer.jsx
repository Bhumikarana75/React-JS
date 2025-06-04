import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Footer.css";

import React from 'react'

function Footer() {
    return (
        <div>
            <section className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="footer-main d-flex">
                            <div className="col-4">
                                <div className="footer-1 ">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="" />
                                    <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                                    <h6><span><i class="fa-solid fa-location-dot"></i></span>51 Green St.Huntington ohaio beach ontario, NY <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11746 KY 4783, USA.</h6>
                                    <h5> <span><i class="fa-solid fa-envelope"></i></span> example@email.com</h5>
                                    <h4><span><i class="fa-solid fa-phone"></i></span>+91 123 4567890</h4>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-2 text-start">
                                    <h5>Company</h5>
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Delivery Information</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Support Center</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-3 text-start">
                                    <h5> Category </h5>
                                    <ul>
                                        <li>
                                            <a href="#">Fast Food</a>
                                        </li>
                                        <li>
                                            <a href="#">Dairy & Bakery</a>
                                        </li>
                                        <li>
                                            <a href="#">Fruits & Vegetable</a>
                                        </li>
                                        <li>
                                            <a href="#">Snack & Spice</a>
                                        </li>
                                        <li>
                                            <a href="#">Juice & Drinks</a>
                                        </li>
                                        <li>
                                            <a href="#">Chicken & Meat</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="footer-4">
                                    <h5>Subscribe Our Newsletter</h5>
                                    <input type="text" placeholder='Search here...' />
                                    <div className="location-icon">
                                        <i class="fa-solid fa-location-arrow"></i>
                                    </div>
                                    <div className="social-icon d-flex">
                                        <div className="social-1">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="social-2">
                                            <i class="fa-brands fa-x-twitter"></i>
                                        </div>
                                        <div className="social-3">
                                            <i class="fa-brands fa-dribbble"></i>
                                        </div>
                                        <div className="social-4">
                                            <i class="fa-brands fa-instagram"></i>
                                        </div>
                                    </div>
                                    <div className="footer-4img d-flex">
                                        <div className="footer41">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg" alt="" srcset="" width={"73px"} />
                                        </div>
                                        <div className="footer42">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/2.jpg" alt="" srcset="" width={"73px"} />
                                        </div>
                                        <div className="footer43">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg" alt="" srcset="" width={"73px"} />
                                        </div>
                                        <div className="footer44">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg" alt="" srcset="" width={"73px"} />
                                        </div>
                                        <div className="footer45">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg" alt="" srcset="" width={"73px"} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="tomato-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/shape-3.png" alt="" srcset="" />
                        </div>
                        <div className="lamon-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/12.png" alt="" srcset="" />
                        </div>
                        <div className="chili-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/13.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-12">
                <div className="copy-write text-center">
                    <h6>© 2024 <span>Carrot</span>, All rights reserved.</h6>
                </div>
            </div>


        </div>
    )
}

export default Footer
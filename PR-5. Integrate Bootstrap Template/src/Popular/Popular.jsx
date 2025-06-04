import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Popular.css";
import React from 'react'
function  Popular() {
  return (
    <div>
      <section className='popular'>
        <div className="container">
          <div className="row">
            <div className="popular-main text-center ">
              <h2>Popular Products</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>

              <div className="popular-d d-flex">
                <div className="col-3">
                  <div className="popular-pro-button">
                    <div className="popular-pro-b1">
                      <button><a href="#">All</a><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="popular-pro-b2">
                      <button><a href="#">Snack</a><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="popular-pro-b3">
                      <button><a href="#">Vegetable</a><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="popular-pro-b4">
                      <button><a href="#">Fruit</a><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="popular-pro-b5">
                      <button><a href="#">Bakery</a><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                  </div>
                  <div className="popular-button-img">
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg" alt="" srcset="" width={"306px"} height={"500px"} />
                  </div>
                  <div className="popular-img-con text-start">
                    <h4>Juicy</h4>
                    <h5>FRUITS</h5>
                    <span>100% Natural</span><br />
                    <button><a href="#">Shop Now</a></button>
                  </div>
                </div>

                <div className="down-popular">
                  <div className="popular-box-main-1 d-flex">
                    <div className="popular-box-card1">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>vegetables</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><span>(4.5)</span>
                        <h3>Fresh organic villa farm <br /> lomon
                          500gm pack</h3>
                        <h5>$120.25 <span>$123.25</span></h5>
                      </div>
                      <div className="popularcart-1">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card2">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/9.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Snacks</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(5.0)</span>
                        <h3>Best snakes with hazel <br></br> nut pack
                          200gm</h3>
                        <h5>$145.25 <span>$150</span></h5>
                      </div>
                      <div className="popularcart-2">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card3">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Fruits</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><span>(4.5)</span>
                        <h3>Fresh organic apple 1kg simla
                          marming</h3>
                        <h5>$120.25 <span>$123.25</span></h5>
                      </div>
                      <div className="popularcart-3">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card4">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Bakery</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(5.0)</span>
                        <h3>Delicious white baked <br /> fresh bread
                          and toast</h3>
                        <h5>$20 <span>$22.10</span></h5>
                      </div>
                      <div className="popularcart-4">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>


                  </div>


                  <div className="popular-box-main-2 d-flex">
                    <div className="popular-box-card5">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/11.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Snacks</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><span>(4.5)</span>
                        <h3>Fresh organic villa farm <br /> lomon
                          500gm pack</h3>
                        <h5>$120.25 <span>$123.25</span></h5>
                      </div>
                      <div className="popularcart-5">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card6">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Fruit</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><span>(3.2)</span>
                        <h3>Organic fresh venila <br /> farm
                          watermelon 5kg</h3>
                        <h5>$50.30 <span>$72.60</span></h5>
                      </div>
                      <div className="popularcart-6">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card7">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/10.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Snacks</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><span>(5.0)</span>
                        <h3>Sweet crunchy nut mix 250gm
                        packh</h3>
                        <h5>$120.25 <span>$123.25</span></h5>
                      </div>
                      <div className="popularcart-7">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>

                    <div className="popular-box-card8">
                      <div className="popular-box-img1">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg" alt="" srcset="" width={"210px"} />
                      </div>
                      <div className="popular-box-con1">
                        <h6>Bakery</h6>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(5.0)</span>
                        <h3>Delicious white baked <br /> fresh bread
                        and toast</h3>
                        <h5>$20 <span>$22.25</span></h5>
                      </div>
                      <div className="popularcart-8">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carrot-img">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/shape-1.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Popular
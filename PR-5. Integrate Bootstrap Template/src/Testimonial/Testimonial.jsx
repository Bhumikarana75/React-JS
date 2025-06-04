import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Testimonial.css";
import React from 'react'

function Testimonial() {
  return (
    <div>
      <section className='testimonial'>
        <div className="container">
          <div className="row">
            <div className="testimonial-main text-center">
              <h2>Great Words From People</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>

              <div className="testimonial-card-main d-flex text-center">
                <div className="col-4">
                  <div className="testcard-1">
                    <div className="testcard1-img">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/1.jpg" alt="" srcset="" />
                    </div>
                    <div className="testcard1-con">
                      <h6>Co Founder</h6>
                      <h5>Stephen Smith</h5>
                      <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br />
                        facilisis.”</p>
                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div className="up-quote">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                    <div className="down-quote">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="testcard-2">
                    <div className="testcard2-img2">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/2.jpg" alt="" srcset="" />
                    </div>
                    <div className="testcard2-con2">
                      <h6>Manager</h6>
                      <h5>Lorem Robinson</h5>
                      <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br />
                        facilisis.”</p>
                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                    </div>
                    <div className="up-quote2">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                    <div className="down-quote2">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="testcard-3">
                    <div className="testcard3-img3">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/3.jpg" alt="" srcset="" />
                    </div>
                    <div className="testcard3-con3">
                      <h6>Team Leader</h6>
                      <h5>Saddika Alard</h5>
                      <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br />
                        facilisis.”</p>
                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div className="up-quote3">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                    <div className="down-quote3">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/left-quote.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-img">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/shape/11.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Testimonial
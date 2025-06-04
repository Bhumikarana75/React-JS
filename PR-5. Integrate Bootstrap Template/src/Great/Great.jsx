import "./section"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Great.css";
import React from 'react'

function Great() {
  return (
    <div>
      <section className='great'>
        <div className="great-main">
          <div className="great-con">
            <h5>35% <span>OFF</span> </h5>
            <h2>Great deal on organic food.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
            <div className="great-box d-flex">
              <div id="countdown" className="countdown">
                <ul className='d-flex'>
                  <li><span id="days"></span><br /><a href="">Days</a></li>
                  <li><span id="hours"></span> <br /><a href="">Hrs</a></li>
                  <li><span id="minutes"></span><br /><a href="">Min</a></li>
                  <li><span id="seconds"></span><br /><a href="">Sec</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Great
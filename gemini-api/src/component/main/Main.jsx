import React from 'react'
import './main.css'
// import {image} from "../../../public/image";

const main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src="../../../public/image/user.png" alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p>
                    <span>Hello, Dev.</span>
                </p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img src="../../../public/image/compass.png" alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img src="../../../public/image/bulb.png" alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img src="../../../public/image/message.png" alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img src="../../../public/image/code.png" alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter e prompt here' />
                    <div>
                        <img src="../../../public/image/gallery.png" alt="" />
                        <img src="../../../public/image/mic.png" alt="" />
                        <img src="../../../public/image/send.png" alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt, facere, maxime reprehenderit quidem velit possimus laudantium 
                </p>
            </div>
        </div>
    </div>
  )
}

export default main
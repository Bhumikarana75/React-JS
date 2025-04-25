import React, { useState } from 'react'
import './sidebar.css'
// import {image} from "../../../public/image";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    return (
        <div className='Sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src="../../../public/image/menu.png" alt="" width="20px" />
                <div className="new-chat">
                    <img src="../../../public/image/plus.png" alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src="../../../public/image/message.png" alt="" />
                            <p>What is React ...</p>
                        </div>
                    </div>
                    : null
                }

            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src="../../../public/image/question.png" alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src="../../../public/image/history.png" alt="" />
                    {extended ? <p>Activities</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src="../../../public/image/settings.png" alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}
export default Sidebar
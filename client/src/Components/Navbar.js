import React from 'react'
import Asterisk from './images/Asterisk.svg'
import Notification from './images/Notification.svg'
import Oval from './images/Oval.png'
const Navbar = () => {
    return (
        <div className = "navbar bg-nav">
            <h1 className="text-topic"><span>L</span><span>E</span><span>V</span><span className="flip">E</span><span className="flip">L</span></h1>
            <ul className="nav-items">
                <li><img className="small" src={Asterisk} alt="Asterisk"/></li>
                <li><img className="small" src={Notification} alt="Notification"/></li> 
                <li><img className="big" src={Oval} alt="User"/></li>
            </ul>
        </div>
    )
}

export default Navbar

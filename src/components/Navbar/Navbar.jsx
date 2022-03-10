import React from 'react'
import './navbar.css'
// import Notification from './notification'
// import Message from './message'
// import Settings from './settings'
function navbar() {
    return (
        <div className='navbar'>
            <span className='logo'>DingDong</span>
            <div classname="icons">
                <div className='icon'>
                    <img src="" className='iconImg' alt="" />
                    <div className='counter'>2</div>
                </div>
                <div className='icon'>
                    <img src="" className='iconImg' alt="" />
                    <div className='counter'>2</div>
                </div>
                <div className='icon'>
                    <img src="" className='iconImg' alt="" />
                    <div className='counter'>2</div>
                </div>
            </div>
        </div>
    )
}

export default navbar
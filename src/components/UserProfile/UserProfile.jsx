import './userprofile.css';

import React from 'react'

function UserProfile() {
    return (
        <div className='profile'>
            <div className='profileInfo'>
                <img src='src/assets/200_img_placeholder.png' alt='profile image' />
                <span><p>Username</p></span>
                <span><p>UserID</p></span>
            </div>
            <div className='profileBio'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam esse
                    omnis necessitatibus. Accusamus sed illum, est laborum fugiat ipsam
                    eveniet at sapiente dicta blanditiis quisquam, voluptate odit alias
                    ipsa nisi, iusto ducimus. Distinctio, quidem voluptate.
                </p>
            </div>
        </div>
    )
}

export default UserProfile
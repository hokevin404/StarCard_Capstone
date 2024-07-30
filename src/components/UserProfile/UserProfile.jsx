import './userprofile.css';

import React from 'react'

function UserProfile({ userid, username}) {

    return (
        <div className='profile'>
            <div className='profileInfo'>
                <img src='src/assets/200_img_placeholder.png' alt='profile image' />
                <div>
                    <span><p>{username}</p></span>
                    <span><p>{userid}</p></span>
                </div>
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
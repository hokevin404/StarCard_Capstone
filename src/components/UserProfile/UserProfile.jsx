import './userprofile.css';

import ProfileBio from '../ProfileBio/ProfileBio'
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
                <ProfileBio userId={userid}/>
            </div>
        </div>
    )
}

export default UserProfile
import './profilebio.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profilebio.css';
import { useAuth } from '../../context/auth/authContext';

function ProfileBio({ userId }) {
    // State for current bio
    const [bio, setBio] = useState('');
    // State for new bio
    const [newBio, setNewBio] = useState('');
    // State to toggle edit
    const [isEditing, setIsEditing] = useState(false);
    // State for errors
    const [error, setError] = useState('');
    // State for loading API
    const [loading, setLoading] = useState(true);
    // Access to token from cookies
    const { cookies } = useAuth();

    // Fetch user bio from database when comp mounts
    useEffect(() => {
        async function fetchUserBio() {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `http://127.0.0.1:3000/api/users/${userId}`,
                    headers: { 'x-auth-token': cookies.token }
                });

                setBio(response.data.bio);
                setNewBio(response.data.bio);
            } catch (err) {
                setError(err.response?.data?.error || 'Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserBio();
    }, [userId, cookies.token]);

    // Handle function to update bio if under 250 characters
    function handleEditToggle() {
        if (isEditing) {
            if (newBio.length > 250) {
                setError('Bio exceeds maximum length of 250 characters');
                return;
            }
            updateBio(newBio);
        }
        setIsEditing(!isEditing);
    };

    // Set submission to newBio state
    function handleInputChange(event) {
        setNewBio(event.target.value);
    }

    // Function to update user bio in database
    async function updateBio(bio) {
        try {
            const response = await axios({
                method: "PUT",
                url: `http://127.0.0.1:3000/api/users/${userId}`,
                data: { bio },
                headers: { 'x-auth-token': cookies.token }
            })

            setBio(response.data.bio);
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to update bio');
        } finally {
            setIsEditing(false);
        }
    };

    if (loading) 
        return <p>Loading...</p>;

    return (
        <div className='profileBio'>
            {isEditing ? (
                <div>
                    <textarea
                        value={newBio}
                        onChange={handleInputChange}
                        rows="4"
                        cols="50"
                    />
                    <div>
                        <button className='save' onClick={handleEditToggle}>Save</button>
                        <button className='cancel' onClick={() => handleEditToggle()}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>{bio}</p>
                    <button className='edit' onClick={handleEditToggle}>Edit Bio</button>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default ProfileBio;

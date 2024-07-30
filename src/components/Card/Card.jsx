import './card.css'

import React from 'react';

function Card({title, price, url }) {

    return (
        <div className="card">
            <div className="cardImage" style={{ backgroundImage: `url(${url})` }}></div>
            <div className="cardContent">
                <div className='cardHeader'>
                    <h2 className="cardTitle">{title}</h2>
                    <span className="cardPrice">${price}</span>
                </div>
            </div>
        </div>
    );
}

export default Card
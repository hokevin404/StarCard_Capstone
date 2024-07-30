import './shop.css'

import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { apiFetch } from '../utilities/apiFetch';

function Shop({ targetURL }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function getCardData() {
            apiFetch(targetURL)
                .then(data => {
                    setCards(data)
                })
                .catch(error => {
                    setError(`Error fetching data`);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        getCardData();
    }, [])

    if (loading)
        return <div>Loading...</div>

    if (error)
        return <div>Error: {error}</div>

    return (
        <>
            <Banner />
            <div className='cardContainer'>
                {cards.length > 0 ? (
                    cards.map(card => {
                        return (
                            <Card
                                key={card._id}
                                title={card.title}
                                price={card.price}
                                url={card.imgURL}
                            />
                        );
                    })
                ) : (
                    <div>No Cards Available</div>
                )}
            </div>
        </>
    );
};

export default Shop
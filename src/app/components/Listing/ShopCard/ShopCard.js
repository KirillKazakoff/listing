import React from 'react';
import Level from '../../Level';
import Price from '../../Price';
import Title from '../../Title';

export default function ShopCard({ card }) {
    const {
        error_messages: error,
        listing_id: id,
        url,
        MainImage: img,
        title,
        currency_code: currency,
        price,
        quantity,
    } = card;

    if (error) return null;
    const { url_570xN: src } = img;

    return (
        <li
            className='card ShopCard'
            key={id}
            id={id}
        >
            <img
                src={src}
                alt={title}
                className='card-img'
            />
            <footer className='card-footer'>
                <Title content={title} />
                <div className='footer-bottom'>
                    <Price content={price} currency={currency} />
                    <Level quantity={quantity} />
                </div>
            </footer>
        </li>
    );
}

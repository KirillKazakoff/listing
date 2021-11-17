/** @format */

import React from 'react';
import PropTypes from 'prop-types';
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
        <li className='card ShopCard' key={id} id={id}>
            <a href={url}>
                <img src={src} alt={title} className='card-img' />
            </a>
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

ShopCard.propTypes = {
    card: PropTypes.shape({
        error_messages: PropTypes.arrayOf(PropTypes.string),
        MainImage: PropTypes.shape({
            url_75x75: PropTypes.string,
        }),
        listing_id: PropTypes.number,
        url: PropTypes.string,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    }).isRequired,
};

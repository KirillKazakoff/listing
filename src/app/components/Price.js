import React from 'react';

export default function Price({ content, currency }) {
    let sign = null;

    switch (currency) {
    case 'USD':
        sign = '$';
        break;

    case 'EUR':
        sign = '€';
        break;

    default:
        sign = currency;
        break;
    }

    return <div className='card-price'>{`${content} ${sign}`}</div>;
}

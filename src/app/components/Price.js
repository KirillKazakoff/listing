/** @format */

import React from 'react';
import PropTypes from 'prop-types';

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

Price.propTypes = {
    content: PropTypes.string.isRequired,
    currency: PropTypes.string,
};

Price.defaultProps = {
    currency: 'USD',
};

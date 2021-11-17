/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

export default function Level({ quantity }) {
    let addCls = null;

    if (quantity <= 10) {
        addCls = 'low';
    } else if (quantity <= 20) {
        addCls = 'medium';
    } else {
        addCls = 'high';
    }

    return (
        <div className={`level-${addCls}`}>
            <Label content={quantity} />
        </div>
    );
}

Level.propTypes = {
    quantity: PropTypes.number.isRequired,
};

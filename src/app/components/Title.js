/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ content }) {
    let output = content;

    if (content.length > 50) {
        output = `${output.substring(50)} ...`;
    }

    return <div className='card-title'>{output}</div>;
}

Title.propTypes = {
    content: PropTypes.string.isRequired,
};

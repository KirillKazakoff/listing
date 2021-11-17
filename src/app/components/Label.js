/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export default function Label({ content }) {
    return <div className='badge'>{content}</div>;
}

Label.propTypes = {
    content: PropTypes.number.isRequired,
};

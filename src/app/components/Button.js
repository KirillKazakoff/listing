/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ content, cls }) {
    return (
        <button className={`btn btn-primary ${cls}`} type='button'>
            {content}
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.string,
};

Button.defaultProps = {
    content: 'Ok',
};

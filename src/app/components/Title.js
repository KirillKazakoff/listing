import React from 'react';

export default function Title({ content }) {
    let output = content;

    if (content.length > 50) {
        output = `${output.substring(50)} ...`;
    }

    return <div className='card-title'>{output}</div>;
}

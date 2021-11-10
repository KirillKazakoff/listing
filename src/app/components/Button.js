import React from 'react';

export default function Button({ content, cls }) {
    return (
        <button
            className={`btn btn-primary ${cls}`}
            type='button'
        >
            {content}
        </button>
    );
}

import React from 'react';
import './IconSwitch.css';

export default function IconSwitch({ activeView, onSwitch }) {
    return (
        <button
            onClick={onSwitch}
            type='button'
            className='IconSwitch material-icons md-48'
        >
            {activeView}
        </button>
    );
}

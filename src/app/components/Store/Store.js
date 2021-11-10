import React from 'react';
import cards from './cards';
import CardsView from '../Listing/Listing';

export default function Store() {
    return (
        <div className='Store'>
            <CardsView
                cards={cards}
            />
        </div>
    );
}

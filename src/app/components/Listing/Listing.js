/** @format */

import { nanoid } from 'nanoid';
import React from 'react';
import ShopCard from './ShopCard/ShopCard';
import data from '../../data.json';
import Error from './Error';

export default function Listing() {
    const cardList = data.map((card) => {
        return <ShopCard card={card} key={nanoid()} />;
    });

    if (!cardList[0]) return <Error />;

    return <ul className='Listing cards-view_module'>{cardList}</ul>;
}

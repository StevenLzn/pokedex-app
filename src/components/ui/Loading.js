import React from 'react';
import pokeball from '../../assets/pokeball.svg';

export const Loading = () => {
    return (
        <div className="loading__container">
            <img className="loading__img" src={pokeball}/>
        </div>
    )
}

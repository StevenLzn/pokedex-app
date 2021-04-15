import React from 'react'
import { GENERATIONS, LIMIT } from '../../config/config';

export const PokedexMenu = ({ state, setState, setLoadMore }) => {
    const { gen } = state;

    const handleClick = (gen) => {
        setState({
            ...state,
            data: [],
            gen: gen,
            offset: GENERATIONS[gen-1].initOffset,
            limit: LIMIT
        });
        setLoadMore(true)
    }

    return (
        <ul className="pokedex__menu-box">
            <h2 className="pokedex__menu-title">Pokedex</h2>
                <li onClick={() => handleClick(1)} className={`pokedex__menu-item pointer ${(gen) == 1 && 'active'}`}>
                    <a>Gen 1</a>
                </li>
                <li onClick={() => handleClick(2)} className={`pokedex__menu-item pointer ${(gen) == 2 && 'active'}`}>
                    <a>Gen 2</a>
                </li>
                <li onClick={() => handleClick(3)}className={`pokedex__menu-item pointer ${(gen) == 3 && 'active'}`}>
                    <a>Gen 3</a>
                </li>
                <li onClick={() => handleClick(4)}className={`pokedex__menu-item pointer ${(gen) == 4 && 'active'}`}>
                    <a>Gen 4</a>
                </li>
                <li onClick={() => handleClick(5)}className={`pokedex__menu-item pointer ${(gen) == 5 && 'active'}`}>
                    <a>Gen 5</a>
                </li>
                <li onClick={() => handleClick(6)}className={`pokedex__menu-item pointer ${(gen) == 6 && 'active'}`}>
                    <a>Gen 6</a>
                </li>
                <li onClick={() => handleClick(7)}className={`pokedex__menu-item pointer ${(gen) == 7 && 'active'}`}>
                    <a>Gen 7</a>
                </li>
                <li onClick={() => handleClick(8)}className={`pokedex__menu-item pointer ${(gen) == 8 && 'active'}`}>
                    <a>Gen 8</a>
                </li>
        </ul>
    )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/pokeball.svg';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__header red">
                <h1 className="sidebar__header-title">Que pokémon estas buscando?</h1>
                <input className="sidebar__header-search" placeholder="Busca un pokémon, habilidad, tipo, etc"/>
            </div>
            <div className="sidebar__items-container">
                <NavLink className="sidebar__item green link" to="/pokedex">
                    <p className="sidebar__item-text">Pokedex</p>
                    <img className="sidebar__item-img" src={pokeball}/>
                </NavLink>
                <a className="sidebar__item green">
                    <p className="sidebar__item-text">Movimientos</p>
                    <img className="sidebar__item-img" src={pokeball}/>
                </a>
                <a className="sidebar__item blue">
                    <p className="sidebar__item-text">Habilidades</p>
                    <img className="sidebar__item-img" src={pokeball}/>  
                </a>
                <a className="sidebar__item yellow">
                    <p className="sidebar__item-text">Items</p>
                    <img className="sidebar__item-img" src={pokeball}/> 
                </a>
                <a className="sidebar__item grey">
                    <p className="sidebar__item-text">Combinaciones</p>
                    <img className="sidebar__item-img" src={pokeball}/>  
                </a>
                <a className="sidebar__item purple">
                    <p className="sidebar__item-text">Acerca de mi</p>
                    <img className="sidebar__item-img" src={pokeball}/>  
                </a>
            </div>
        </aside>
    )
}

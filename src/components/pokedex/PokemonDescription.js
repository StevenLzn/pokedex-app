import React, { useEffect, useState } from 'react'
import { getTypeClass } from '../../helpers/getTypeClass';

import close from '../../assets/close.png';
import { getPokemonFullData } from '../../helpers/getPokemonFullData';
import { Loading } from '../ui/Loading';

export const PokemonDescription = ({ idSelected, setPokemonDesc,  pokemonData}) => {

    const [state, setState] = useState({
        loading: true,
        ...pokemonData
    });

    const { abilities, id, name, types, base_experience, img, height, weight, stats, loading } = state;

    useEffect(async() => {
        const pokemon = await getPokemonFullData(idSelected);
        setState( { ...state, loading: false, ...pokemon} )
    }, [])

    const handleClose = () => {
        setPokemonDesc({
            show: false,
        });
    
        document.body.style.overflow = 'visible';
    }

    const handleClickOutside= (e) => {

        const modal = document.querySelector('.pokedex__modal');

        if(e.target == modal){

            handleClose();
        }

    }
    const colorCard = !loading && getTypeClass(types[0]);

    return (
        <div className="pokedex__modal" onClick={handleClickOutside}>
                <div className="pokedex__data-box">
                    <button className="pokedex__modal-close" onClick={handleClose}>
                        <img src={close} />
                    </button>
                    <div className="pokedex__data-column-1">
                        <img className="pokedex__data-img"src={ img }/>
                    </div>
                    <div className="pokedex__data-column-2">
                        <div className="pokedex__data-header">
                            <h2 className="pokedex__data-name">{ name }</h2>
                            <h2 className="pokedex__data-id"> { `#${(id < 10) ? '00' + id : (id < 100) ? '0' + id : id}` }</h2>
                        </div>
                        { loading && <Loading /> }
                        {
                            !loading &&
                            <div className={`pokedex__data-info ${colorCard}`}>
                                <div className="pokedex__data-attribute">
                                    <p className="pokedex__data-attribute-title">Altura</p>
                                    <p className="pokedex__data-attribute-value">{ `${height/10} m` }</p>
                                </div>
                                <div className="pokedex__data-attribute">
                                    <p className="pokedex__data-attribute-title">Peso</p>
                                    <p className="pokedex__data-attribute-value">{ `${weight/10} kg` }</p>
                                </div>
                                <div className="pokedex__data-attribute">
                                    <p className="pokedex__data-attribute-title">Habilidades</p>
                                    {
                                        abilities.map( ability => <p key={`${ability}${id}`}  className="pokedex__data-attribute-value"> { ability } </p> )
                                    }
                                </div>
                                <div className="pokedex__data-attribute">
                                    <p className="pokedex__data-attribute-title">Exp base</p>
                                    <p className="pokedex__data-attribute-value">{ `${base_experience} xp` }</p>
                                </div>
                            </div>                 
                        }
                    </div>
                    { loading && <Loading /> }
                    {
                        !loading &&
                        <div className="pokedex__data-bottom">
                            <div className="pokedex__data-stats">
                                <h1 className="pokedex__data-stats-header">Puntos base</h1>
                                {
                                    stats.map( stat => (
                                        <div className="pokedex__data-stats-bar-container" key={`${stat.name}${id}`}>
                                            <div className={`pokedex__data-stats-bar ${colorCard}`}>
                                                <div 
                                                    className="pokedex__data-stats-value" 
                                                    style={{"height": `${100 - (stat.base_stat/2.55)}%`}}
                                                >
                                                    <span className="pokedex__data-stats-info">{stat.base_stat}</span>
                                                </div>
                                            </div>
                                            <span className="pokedex__data-stats-title">{ stat.name }</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
        </div>
    )
}

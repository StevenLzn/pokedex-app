import React from 'react';
import { getTypeClass } from '../../helpers/getTypeClass'

export const PokemonCard = ({id, name, types, img, setPokemonDesc}) => {

    const colorCard = getTypeClass(types[0]);

    const handleClick = () =>{
        setPokemonDesc({
            show: true,
            idSelected: id,
            pokemonData: {
                name,
                id,
                types,
                img
            }
        });
        document.body.style.overflow = 'hidden';
    }

    return (
        <div onClick={handleClick} className={`pokemon__card-box pointer ${colorCard}`}>
            <div className="pokemon__card-title">
                <h2 className="pokemon__card-title-name">{ name }</h2>
                <h2 className="pokemon__card-title-id">{ `#${(id < 10) ? '00' + id : (id < 100) ? '0' + id : id}` }</h2> 
            </div>
            <div className="pokemon__card-content">
                {
                    types.map( type => <p key={`${type}${id}`} className={`pokemon__card-content-type ${colorCard}-lighten`}>{ type }</p>)
                }
                
                <img className="pokemon__card-content-img" src={img}/> 
            </div>
            
        </div>
    )
}

import React, { useEffect, useRef, useState } from 'react';
import { checkGeneration } from '../../helpers/checkGeneration';
import { useFetchPokemons } from '../../hooks/useFetchPokemons';
import { Loading } from '../ui/Loading';
import { PokedexMenu } from './PokedexMenu';
import { PokemonCard } from './PokemonCard';
import { PokemonDescription } from './PokemonDescription';

export const PokedexScreen = () => {

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.width);
    
    const [ loadMore, setLoadMore ] = useState(false);
    const [ state, setState ] = useFetchPokemons(loadMore, setLoadMore);
    const { data, loading } = state;

    const [ pokemonDesc, setPokemonDesc ] = useState({
        show: false,
        idSelected: 0,
        pokemonData: {}
    });

    const [element, setElement] = useState(null)

    const observer = useRef(
        new IntersectionObserver( 
            entries => {
                if(entries[0].isIntersecting){
                    setLoadMore(true);
                }
                
            },
            { threshold: 0.5 }
        )
    );

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if( currentElement ) {
            currentObserver.observe( currentElement );
        }
        return () => {
            if( currentElement ) {
                currentObserver.unobserve( currentElement );
            }
        }
    }, [element]);
    
    const { show, idSelected, pokemonData } = pokemonDesc;

    return (
        <>
            {
                show
                &&
                <PokemonDescription idSelected={idSelected}  pokemonData={pokemonData} setPokemonDesc={setPokemonDesc}/>
            }
            
            <div className="pokedex__box" id="pokedex__box">
                <PokedexMenu state={state} setState={setState} setLoadMore={setLoadMore}/>
                <div className="pokedex__pokemon-container">
                    {
                        data.map( pokemon => {
                            return <PokemonCard 
                                key={pokemon.name}
                                {...pokemon}
                                setPokemonDesc={setPokemonDesc}
                            />
                        })
                    }
                    { loading && <Loading /> }

                    { !checkGeneration(state.offset, state.gen) 
                        &&
                        <div ref={setElement} style={{background: "transparent", height: "35px", width: "100%"}}></div>
                    }

                </div>
                   
            </div>
        </>
    )
}

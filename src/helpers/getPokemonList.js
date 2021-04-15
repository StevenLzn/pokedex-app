import { getPokemonCardData } from "./getPokemonCardData";

export const getPokemonList = async(url) => {
    
    const resp = await fetch(url);
    const {results} = await resp.json();

    // El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas 
    // en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado 
    // por la primera promesa que es rechazada.
    //Una Promise  que se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas, 
    // o bien se rechazará cuando alguna de ellas se rechace.

    let pokemonsData = await Promise.all(results.map( async(pokemon) => {
            const resultado = await getPokemonCardData(pokemon.name)
            return resultado;
    }));
    
    return pokemonsData;
}
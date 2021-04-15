import { API_URL } from "../config/config";

export const getPokemonCardData = async(pokemon) => {
    
    const resp = await fetch(`${API_URL}pokemon/${pokemon}`);
    const {id, types, name, sprites } = await resp.json();
    const type = types.map( ({type}) => type.name)
    const { front_default } = sprites.other['official-artwork'];

    return {
        id,
        name,
        types: type,
        img: front_default,
    }
}

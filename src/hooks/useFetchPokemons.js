import { useEffect, useState } from "react"
import { getPokemonList } from "../helpers/getPokemonList";
import { API_URL, LIMIT, OFFSET } from "../config/config";
import { checkLimitData } from "../helpers/checkLimitData";


export const useFetchPokemons = (loadMore, setLoadMore) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
        offset: OFFSET,
        limit: LIMIT,
        gen: 1,
    });

    useEffect(() => {
        
        if(loadMore){
            setState({ ...state, loading: true});
            const limit = checkLimitData(state.offset, state.gen);
            
            getPokemonList(`${API_URL}pokemon?offset=${state.offset}&limit=${limit}`)
            .then( data => {
                setState({
                    ...state,
                    data: [
                        ...state.data,
                        ...data,
                    ],
                    loading: false,
                    offset: state.offset + limit,
                    limit: limit,
                })
            })
            setLoadMore(false);
        }
        
    }, [loadMore]);

    return [state, setState];
}

import { API_URL } from "../config/config";

export const getPokemonFullData = async(pokemon) => {
    
    const resp = await fetch(`${API_URL}pokemon/${pokemon}`);
    const {abilities, base_experience, height, weight, stats } = await resp.json();
    const ability = abilities.map( ({ability}) => ability.name);

    const stat = stats.map( ({base_stat, stat}) => {
        switch (stat.name) {
            case "attack":
                stat.name = "Ataque";
                break;
            case "defense":
                stat.name = "Defensa";
                break;
            case "special-attack":
                stat.name = "Ataque especial";
                break;
            case "special-defense":
                stat.name = "Defensa especial";
            break;
                case "speed":
                stat.name = "Velocidad";
                break;
            default:
                stat.name = "PS";
                break;
        }

        return {
            name: stat.name,
            base_stat
        }
    });

    return {
        abilities: ability,
        base_experience,
        height,
        weight,
        stats: stat
    };
}

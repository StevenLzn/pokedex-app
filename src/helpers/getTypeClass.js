export const getTypeClass = ( type ) => {
    let colorCard;
    
    switch (type) {
        case 'grass':
            colorCard = 'green';
            break;
        case 'fire':
            colorCard = 'red';
            break;
        case 'water':
            colorCard = 'blue';
            break;
        case 'poison':
            colorCard = 'purple';
            break;
        case 'electric':
            colorCard = 'yellow';
            break;
        case 'bug':
            colorCard = 'yellowgreen';
            break;
        case 'ground':
            colorCard = 'ground';
            break;
        case 'fairy':
            colorCard = 'pink';
            break;
        case 'fighting':
            colorCard = 'brown';
            break;
        case 'psychic':
            colorCard = 'fuchsia';
            break;
        case 'rock':
            colorCard = 'orange';
            break;
        case 'ghost':
            colorCard = 'purpledark';
            break;
        case 'ice':
            colorCard = 'blueice';
            break;
        case 'dragon':
            colorCard = 'dragon';
            break;
        default:
            colorCard = 'grey';
            break;
    }

    return colorCard;
}
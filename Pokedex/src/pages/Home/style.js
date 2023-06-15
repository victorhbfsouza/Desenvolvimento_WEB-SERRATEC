import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const TitleContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 80px;
        cursor: pointer;
        transition: 0.4s;
        border-radius: 50%;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    max-height: 600px;
    overflow: auto;
    padding: 20px 50px 50px 50px;
`;

export const PokeCard = styled.div`
    background-color: ${props => {
        let color = '#FFF';


        switch (props.pokemonType.toLowerCase()) {
            case 'normal':
                color = '#A8A77A';
                break;
            case 'fire':
                color = '#EE8130';
                break;
            case 'water':
                color = '#6390F0';
                break;
            case 'electric':
                color = '#F7D02C';
                break;
            case 'grass':
                color = '#7AC74C';
                break;
            case 'ice':
                color = '#96D9D6';
                break;
            case 'fighting':
                color = '#C22E28';
                break;
            case 'poison':
                color = '#A33EA1';
                break;
            case 'ground':
                color = '#E2BF65';
                break;
            case 'flying':
                color = '#A98FF3';
                break;
            case 'psychic':
                color = '#F95587';
                break;
            case 'bug':
                color = '#A6B91A';
                break;
            case 'rock':
                color = '#B6A136';
                break;
            case 'ghost':
                color = '#735797';
                break;
            case 'dragon':
                color = '#6F35FC';
                break;
            case 'dark':
                color = '#705746';
                break;
            case 'steel':
                color = '#B7B7CE';
                break;
            case 'fairy':
                color = '#D685AD';
                break;
            default:
                color = '#FFFFFF'
                break;
        }

        return color;
    }};
    padding: 20px;
    border-radius: 10px;

    transition: 0.4s;

    &:hover {
        transform: scale(1.1);
    }

    img {
        width: 150px;
    }

    h3 {
        margin: 0;
        color: #2b2b2b;
    }

    span {
        color: #2b2b2b;
    }
`;

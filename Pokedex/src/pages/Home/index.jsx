import { useState, useEffect } from 'react';
import './style.css';
import pokemonData from '../../mock/data.json';

export function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        function fetchData() {
            setTimeout(() => {
                var pkmnFormatted = pokemonData.map(pokemon => {
                    var str = "" + pokemon.id
                    var pad = "000"
                    var newId = pad.substring(0, pad.length - str.length) + str

                    return { ...pokemon, newId: newId }
                });

                setPokemons(pkmnFormatted)
            }, 2000)
        }

        fetchData();
    }, [])

    return (
        <>
            <div id="container">
                <header id="titleContainer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="Pokeball" onClick={() => setIsHidden(!isHidden)} />
                    <h1>Pokedex</h1>
                </header>
                <div id="contentContainer">
                    {
                        isHidden === true ? (
                            null
                        ) : (
                            pokemons.map(pokemon => {
                                return (
                                    <div className="pokeCard" key={pokemon.id}>
                                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.newId}.png`} alt={pokemon.name.english} />
                                        <h3>{pokemon.name.english}</h3>
                                        <span>{pokemon.type.length > 1 ? `${pokemon.type[0]} | ${pokemon.type[1]}` : pokemon.type}</span>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}
import React, { useState } from "react";
import "./pokemon-styles.css";

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

function CardPokemon() {
  const [pokemon, setPokemon] = useState({
    name: "totodile",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
  });

  async function handleChange(event) {
    const value = event.target.value;
    const pokemon = await getPokemon(value);
    console.log(pokemon);
    setPokemon({
      name: pokemon.name,
      image: pokemon.sprites.front_shiny,
    });
  }
  return (
    <div className="card-pokemon">
      <h1 className="name-pokemon">{pokemon.name}</h1>
      <img className="image-pokemon" src={pokemon.image} alt="" />
      <form action="">
        <input
          className="input"
          type="number"
          placeholder="Escoge entre los 150 pokemones"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default CardPokemon;

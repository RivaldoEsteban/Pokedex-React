import React, { useState } from "react";
import "./pokemon-styles.css";

async function getPokemon(endpoint, id) {
  const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${id}/`);
  const data = await response.json();
  return data;
}

// console.log(speech);

function CardPokemon() {
  const [pokemon, setPokemon] = useState({
    name: "totodile",
    imageFront:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    imageBack: "",
    id: "169",
    types: [],
    abilities: [],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.querySelector("input").value;

    const pokemon = await getPokemon("pokemon", value);

    const speech = window.speechSynthesis;
    const otherData = await getPokemon("pokemon-species", value);
    // console.log(otherData);

    const description = otherData.flavor_text_entries.find(
      (flavor) => flavor.language.name === "es"
    );

    const utterance = new SpeechSynthesisUtterance(
      `${pokemon.name}. ${description.flavor_text}`
    );
    speech.speak(utterance);

    setPokemon({
      name: pokemon.name,
      imageFront: pokemon.sprites.front_default,
      imageBack: pokemon.sprites.back_default,
      id: pokemon.id,
      types: pokemon.types,
      abilities: pokemon.abilities,
    });
  }

  return (
    <div className="pokedex">
      <div>
        <p className="circle-icon"></p>
        <div className="icon">
          <p className="icon-red"></p>
          <p className="icopn-"></p>
        </div>
      </div>
      <div className="information-pokemon">
        <div className="image-pokemon">
          <h1 className="name-pokemon">{pokemon.name}</h1>
          <div className="image-group">
            <img className="image" src={pokemon.imageFront} alt="" />
            <img className="image" src={pokemon.imageBack} alt="" />
          </div>
          <div className="types-pokemon">
            {pokemon.types.map((type) => {
              return <p className="type">{type.type.name}</p>;
            })}
          </div>
        </div>
        <div className="data-pokemon">
          <div className="data">
            <h4 className="datatype">abilities</h4>
            <div className="data-result">
              {pokemon.abilities.map((ability) => {
                return <li className="abilities">{ability.ability.name}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="search-pokemon-input">
        <form action="" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Escoge entre los 898 pokemones"
            autoComplete="off"
            // onChange={handleChange}
          />
          <button>enviar</button>
        </form>
      </div>
    </div>
  );
}

export default CardPokemon;

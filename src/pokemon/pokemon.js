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
    name: "",
    imageFront: "",
    imageBack: "",
    id: "",
    types: [],
    abilities: [],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const pokeScreen = document.querySelector("#poke-screen");
    pokeScreen.style.background = "white";
    const value = event.target.querySelector("input").value;
    const pokemon = await getPokemon("pokemon", value);
    const speech = window.speechSynthesis;
    const otherData = await getPokemon("pokemon-species", value);

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
    <div className="wrapper">
      <div className="pokedex">
        <div className="top-circles">
          <p className="circle-icon"></p>
          <p className="icon-red"></p>
          <p className="icon-yellow"></p>
        </div>
        <div className="information-pokemon">
          <div className="pokemon-container">
            <div className="image-pokemon" id="poke-screen">
              <h1 className="name-pokemon">{pokemon.name}</h1>
              <div className="image-group">
                <img className="image" src={pokemon.imageFront} alt="" />
                <img className="image" src={pokemon.imageBack} alt="" />
              </div>
              {/* <div className="types-pokemon">
                {pokemon.types.map((type) => {
                  return <p className="type">{type.type.name}</p>;
                })}
              </div> */}
            </div>
          </div>
          {/* <div className="data-pokemon">
            <div className="data">
              <h4 className="datatype">abilities</h4>
              <div className="data-result">
                {pokemon.abilities.map((ability) => {
                  return <li className="abilities">{ability.ability.name}</li>;
                })}
              </div>
            </div>
          </div> */}
        </div>
        <div className="search-pokemon-input">
          <form className="form" action="" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Son 898 pokemones"
              autoComplete="off"
            />
            <button className="btn">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardPokemon;

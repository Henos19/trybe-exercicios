import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component{
  render() {
    return(
      <>
        {
          pokemons.map((getPokemon) => {
            return (
              <Pokemon pokemon={getPokemon} key={getPokemon.id}/>
            )
          })
        }
      </>
    )
  }
}

export default Pokedex;
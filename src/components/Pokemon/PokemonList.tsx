import React from "react";
import PokemonCard from "./PokemonCard";
import { PokemonType } from "../../context";

type PokemonListProps = {
  pokemons: PokemonType[]; 
};

const PokemonList = ({ pokemons } : PokemonListProps ) => {
  return(
    <div className="PokemonList min-h-[684px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-[12px]">
      {
        pokemons.map((pokemon) =>{
          return (
          <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.image}  abilities={pokemon.abilities} types={pokemon.types }/>
        )
        })
      }
    </div>
  )
}

export default PokemonList;

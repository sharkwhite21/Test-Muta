import { useMemo } from 'react';
import { PokemonType } from '../context';

export const usePokemonSearchAndPagination = (
  pokemons: PokemonType[],
  allPokemons: PokemonType[],
  searchTerm: string
) => {
  const filteredPokemons = useMemo(() => {
    return searchTerm
      ? allPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : pokemons;
  }, [pokemons, allPokemons, searchTerm]);

  return { filteredPokemons };
};

import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../utils/PokemonDetail';
import { PokemonType } from '../context';

export const usePokemonData = (limit: number, offset: number) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [allPokemons, setAllPokemons] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaginatedPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        const pokemonsDetails = await Promise.all(
          data.results.map((pokemon: { name: string; url: string }) => getPokemonDetails(pokemon))
        );

        setPokemons(pokemonsDetails.filter((pokemon): pokemon is PokemonType => pokemon !== null));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaginatedPokemons();
  }, [limit, offset]);

  // Cargar todos los Pokemon
  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const allData = await response.json();
        const allDetails = await Promise.all(
          allData.results.map((pokemon: { name: string; url: string }) => getPokemonDetails(pokemon))
        );

        setAllPokemons(allDetails.filter((pokemon): pokemon is PokemonType => pokemon !== null));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemons();
  }, []);

  return { pokemons, allPokemons, loading, error, setPokemons };
};

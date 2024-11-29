import React, { useState } from 'react';
import { usePokemonData } from '../../hooks/usePokemonData';
import { SearchBar } from '../SearchBar';
import PokemonList from '../Pokemon/PokemonList';
import { PaginationControls } from './PaginationControl';
import { usePokemonSearchAndPagination } from '../../hooks/usePokemonSearchAndPagination';
import SkeletonLoader from '../SkeletonLoader';
import errorImage from '../../assets/error-search.jpg';


export const PokemonContainer = () => {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const limit = 20;

  const { pokemons, allPokemons, loading, error } = usePokemonData(limit, offset);
  const { filteredPokemons } = usePokemonSearchAndPagination(pokemons, allPokemons, searchTerm);

  const handleNextPage = () => setOffset(offset + limit);
  const handlePrevPage = () => setOffset(offset - limit);
  const handleGoToPage = (page: number) => {
    const newOffset = (page - 1) * limit;
    setOffset(newOffset); 
  };

  if (loading) {
    return (
      <>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SkeletonLoader /> 
      </>
    );
  }
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm && filteredPokemons.length === 0 ? (
        <div className='flex flex-col align-center justify-center max-w-[640px] min-h-[300px] md:min-h-[684px] mx-auto items-center'>
          <p className='text-2xl' >No se encontraron resultados para "{searchTerm}".</p>
          <img className="max-w-[230px] min-h-[230px]"src={errorImage} alt="" />
        </div>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
      {!searchTerm && (
        <PaginationControls
          offset={offset}
          limit={limit}
          totalPokemons={allPokemons.length}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleGoToPage= {handleGoToPage}
        />
      )}
    </>
  );
};

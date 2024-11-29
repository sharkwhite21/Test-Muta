import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(localSearchTerm); 
    }, 400); 

    return () => {
      clearTimeout(handler);
    };
  }, [localSearchTerm, setSearchTerm]);

  return (
    <form className="flex justify-center w-full mb-4" role="search" aria-label="Buscar Pokémon">
      <label htmlFor="search-pokemon" className="sr-only">
        Buscar Pokémon
      </label>
      <input
        id="search-pokemon"
        type="text"
        className="w-[330px] md:w-[640px] p-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#7fb0b8] focus:outline-none"
        placeholder="Buscar Pokémon"
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
    </form>
  );
};

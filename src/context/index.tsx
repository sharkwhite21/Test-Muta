import React, { createContext, useState, useContext } from 'react';

export type PokemonType = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[]
};

export type GlobalContextType = {
  pokemons: PokemonType[];
  setPokemons?: React.Dispatch<React.SetStateAction<PokemonType[]>>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ pokemons, setPokemons, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext debe ser usado dentro de GlobalProvider');
  }
  return context;
};

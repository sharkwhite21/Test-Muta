import React from 'react'
import { Header }from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { PokemonContainer } from './components/Layout/PokemonContainer';

function App() {
  return (
    <>
      <Header />
      <PokemonContainer />
      <Footer />
    </>
  )
}

export default App


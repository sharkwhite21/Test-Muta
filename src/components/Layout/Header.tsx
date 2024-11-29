import React from 'react';

import logo from '../../assets/International_Pokémon_logo.svg'

export const Header = () => {
  return (
    <header className="h-[150px] flex justify-center bg-[#7fb0b8] items-center mb-[40px]">
      <img src={logo} alt="" />
      
      {/* <h1 className="text-4xl">Pokemon APP</h1> */}
    </header>
  );
};

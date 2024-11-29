import React, { useState } from "react";
import { Modal } from "antd";

export type PokemonCardType = {
  name: string;
  image: string;
  abilities: string[];
  types: string[];
};

const PokemonCard = ({ name, image, abilities, types }: PokemonCardType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pokemoncard mx-auto border border-[#80808059] rounded-[15px] p-[15px] max-w-[110px] min-h-[110px] md:max-w-[300px] md:min-h-[300px] md:max-h-[330px] hover:shadow-lg hover:shadow-yellow-500">
      <button
        className="pokemoncard__activable"
        onClick={openModal}
        style={{ cursor: "pointer" }}
        aria-label={`Abrir detalles de ${name}`}
      >
        <img
          className="pokemoncard__activable__image min-h-[78px] md:min-h-[268px] min-w-[78px] md:min-w-[268px]"
          src={`${image}`}
          alt={name}
        />
        <h3 className="pokemoncard__activable__text text-center mt-2 uppercase text-[0.8rem] md:text-[1.1rem]">
          {name}
        </h3>
      </button>
  
      <Modal
        className="uppercase"
        title={<h2 className="text-lg font-bold">{name}</h2>}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
      >
        <img
          className="pokemoncard__modal__image max-h-[450px] max-w-[450px] mx-auto"
          src={`${image}`}
          alt={`Imagen detallada de ${name}`}
          style={{ width: "100%", height: "auto" }}
        />
  
        <div className="pokemoncard__modal__descriptions max-w-[490px] mx-auto mt-4 flex justify-around">
          {/* Abilities Section */}
          <section className="pokemoncard__modal__section max-w-[145px] w-full flex flex-col items-start border border-green-500 rounded-t-lg rounded-b-none bg-[#c8e6c86e]">
            <h3 className="pokemoncard__modal__section-title w-full text-center bg-green-500 text-white rounded-t-md">
              Abilities
            </h3>
            <ul className="pokemoncard__modal__list w-full flex flex-col p-2">
              {abilities.map((ability, index) => (
                <li key={index} className="pokemoncard__modal__list-item">
                  {ability}
                </li>
              ))}
            </ul>
          </section>
  
          {/* Types Section */}
          <section className="pokemoncard__modal__section max-w-[145px] w-full flex flex-col items-start border border-[#2269c5] rounded-t-lg rounded-b-none bg-[#2269c56b]">
            <h3 className="pokemoncard__modal__section-title w-full text-center bg-[#2269c5] text-white rounded-t-md">
              Types
            </h3>
            <ul className="pokemoncard__modal__list w-full flex flex-col p-2">
              {types.map((type, index) => (
                <li key={index} className="pokemoncard__modal__list-item">
                  {type}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Modal>
    </div>
  );
  
};

export default PokemonCard;

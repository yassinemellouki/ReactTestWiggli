import React from "react";
import { AppDataConsumer } from "../context/appData";
import Card from "../components/card";

const Home = ({store, actions}) => {

  const {pokemons} = store;
  return (
    <div className="page-content">
      <div className="cards-wrapper">
        {
          pokemons.map((pokemon, i) => (<Card name={pokemon.name} url={pokemon.url}/>))
        }
      </div>
    </div>
  );
};

export default AppDataConsumer(Home);

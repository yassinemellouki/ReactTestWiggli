import React from "react";
import { AppDataConsumer } from "../context/appData";
import Card from "../components/card";
import Pagination from '../components/pagination';

const Home = ({store, actions}) => {

  const {pokemons, next, prev} = store;


  return (
    <div className="page-content">
      <div className="cards-wrapper">
        {
          pokemons.map((pokemon, i) => (<Card key={i} name={pokemon.name} url={pokemon.url}/>))
        }
      </div>
      {
        (pokemons && pokemons.length > 0) && <Pagination prev={prev} next={next} gotPaginate={actions.gotPaginate}/>
      }
    </div>
  );
};

export default AppDataConsumer(Home);

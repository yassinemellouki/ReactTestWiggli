import React, {useEffect, useState} from "react";
import { AppDataConsumer } from "../context/appData";
import {
  useLocation
} from "react-router-dom";

const View = ({store, actions,}) => {

  const {search} = useLocation();
  const urlParams = new URLSearchParams(search)
  const id = urlParams.get('id');

  const {pokemon} = store;


  useEffect(() => {
    if(!pokemon) {
      actions.getPokemon(id);
    }
  },[])
  return (
    <div className="page-content">
      <h2>View</h2>
    </div>
  );
};

export default AppDataConsumer(View);

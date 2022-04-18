import React from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../helpers";

const Card = ({name, url}) => {
  const ID = getIdFromUrl(url);
  return (
    <Link className="card" to={`view?id=${ID}`}>
      <p>{name}</p>
    </Link>
  );
};

export default Card;

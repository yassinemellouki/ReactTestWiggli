import React from "react";
import { AppDataConsumer } from "../context/appData";

const Home = () => {
  return (
    <div className="page-content">
      <h2>Home</h2>
    </div>
  );
};

export default AppDataConsumer(Home);

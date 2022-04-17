import React from "react";
import { AppDataConsumer } from "../context/appData";

const View = () => {
  return (
    <div className="page-content">
      <h2>View</h2>
    </div>
  );
};

export default AppDataConsumer(View);

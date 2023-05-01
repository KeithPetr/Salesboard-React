import React, { useState } from "react";
import Header from "./Header";
import SalesSelector from "./SalesSelector";
import SalesData from "./SalesData";
import Buttons from "./Buttons";

function App() {
  return (
    <div className="container">
      <div className="salesboard">
        <Header />
        <SalesSelector />
        <SalesData />
        <Buttons />
      </div>
    </div>
  );
}

export default App;

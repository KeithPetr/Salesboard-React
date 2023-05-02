import React, { useState } from "react";
import Header from "./Header";
import SalesSelector from "./SalesSelector";
import SalesData from "./SalesData";
import Buttons from "./Buttons";

function App() {
  const salesObjArr = [
    {
      emoji: "⭐",
      revenue: 200,
      commission: 50,
    },
    {
      emoji: "🔥",
      revenue: 300,
      commission: 75,
    },
  ];

  const [salesIconsArray, setSalesIconsArray] = useState([]);
  const achievementsArray = [];
  const sessionArray = [];
  const bell = "🔔";
  const bag = "💰";
  const trophy = "🏆";
  const eight = "🎖️";
  const [totalRevenue, setTotalRevenue] = useState(0);
  let totalCom = 0;
  let revenueMet = false;

  function calculateTotalRevenue() {
    let total = 0;
    salesIconsArray.forEach((icon) => {
      const obj = salesObjArr.find((o) => o.emoji === icon);
      if (obj) {
        total += obj.revenue;
      }
    });
    return total;
  }

  function handleAddProduct(product) {
    const obj = salesObjArr.find((o) => o.emoji === product);
    if (obj) {
      // Calculate the new total revenue
      const newTotalRevenue = totalRevenue + obj.revenue;
      // Update the state variables with the new values
      setSalesIconsArray([...salesIconsArray, product]);
      setTotalRevenue(newTotalRevenue);
    }
  }

  return (
    <div className="container">
      <div className="salesboard">
        <Header />
        <SalesSelector
          revenue={totalRevenue}
          salesObjects={salesObjArr}
          addProduct={handleAddProduct}
        />
        <SalesData
          revenue={totalRevenue}
          salesObjects={salesObjArr}
          salesIcons={salesIconsArray}
        />
        <Buttons />
      </div>
    </div>
  );
}

export default App;

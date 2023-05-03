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
  const [achievementsArray, setAchievementsArray] = useState([]);
  const sessionArray = [];
  const bell = "🔔";
  const bag = "💰";
  const trophy = "🏆";
  const eight = "🎖️";
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalCom, setTotalCom] = useState(0);
  const [revenueMet, setRevenueMet]  = useState(false);


  function handleAddProduct(product) {
    const obj = salesObjArr.find((o) => o.emoji === product);
    console.log(obj);
    if (obj) {
      // Calculate the new total revenue
      const newTotalRevenue = totalRevenue + obj.revenue;
      const newTotalCom = totalCom + obj.commission;
      // Update the state variables with the new values
      setSalesIconsArray([product, ...salesIconsArray]);
      setTotalRevenue(newTotalRevenue);
      setTotalCom(newTotalCom);
      if (salesIconsArray.length === 0) {
        setAchievementsArray(prev => [...prev, bell])
      }
      if (salesIconsArray.length === 7) {
        setAchievementsArray(prev => [...prev, eight])
      }
    }
    
    console.log(achievementsArray)
  }

  return (
    <div className="container">
      <div className="salesboard">
        <Header />
        <SalesSelector
          salesObjects={salesObjArr}
          addProduct={handleAddProduct}
        />
        <SalesData
          commission={totalCom}
          revenue={totalRevenue}
          salesObjects={salesObjArr}
          salesIcons={salesIconsArray}
          achievements={achievementsArray}
        />
        <Buttons />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Profile from "../images/Profile.jpg"

export default function SalesSelector(props) {
  const {salesObjects, addProduct} = props;

  return (
    <>
      <img src={Profile} alt="profile picture of sales agent" />
      <div className="sales-selectors">
        <button onClick={() => addProduct(salesObjects[0].emoji)} type="button" className="star" id="star">
          ⭐
        </button>
        <button onClick={() => addProduct(salesObjects[1].emoji)} type="button" className="fire" id="fire">
          🔥
        </button>
      </div>
    </>
  );
}

import React from "react";
import Profile from "../images/Profile.jpg"

export default function SalesSelector(props) {
  const {salesObjects, addProduct, theme} = props;

  return (
    <>
      <img src={Profile} alt="profile picture of sales agent" />
      <div className="sales-selectors">
        <button onClick={() => addProduct(salesObjects[0].emoji)} type="button" className={`star ${theme === 'light' ? 'light-purple' : ''}`}>
          ⭐
        </button>
        <button onClick={() => addProduct(salesObjects[1].emoji)} type="button" className={`fire ${theme === 'light' ? 'light-purple' : ''}`}>
          🔥
        </button>
      </div>
    </>
  );
}

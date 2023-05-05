import React from "react";

export default function Buttons(props) {
  const { resetData, saveData, clearStorage, theme } = props
  return (
    <div className="local-storage">
      <button onClick={saveData} className={`save-data-btn ${theme === 'light' ? 'light-grey' : ''}`} type="button">
        Save Data
      </button>
      <button onClick={resetData} className={`reset-display-btn ${theme === 'light' ? 'light-grey' : ''}`} type="button">
        Reset Display
      </button>
      <button onClick={clearStorage} className={`reset-storage-btn ${theme === 'light' ? 'light-grey' : ''}`} type="button">
        Reset Storage
      </button>
    </div> 
  );
}

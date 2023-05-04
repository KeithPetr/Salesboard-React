import React from "react";

export default function Buttons(props) {
  const { resetData, saveData, clearStorage } = props
  return (
    <div className="local-storage">
      <button onClick={saveData} className="save-data-btn" type="button">
        Save Data
      </button>
      <button onClick={resetData} className="reset-display-btn" type="button">
        Reset Display
      </button>
      <button onClick={clearStorage} className="reset-storage-btn" type="button">
        Reset Storage
      </button>
    </div> 
  );
}

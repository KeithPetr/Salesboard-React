import React from "react";

export default function Buttons() {
  return (
    <div className="local-storage" id="local-storage">
      <button className="save-data-btn" id="save-data-btn" type="button">
        Save Data
      </button>
      <button className="reset-display-btn" id="reset-display-btn" type="button">
        Reset Display
      </button>
      <button className="reset-storage-btn" id="reset-storage-btn" type="button">
        Reset Storage
      </button>
    </div> 
  );
}

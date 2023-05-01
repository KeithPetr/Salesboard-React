import React from "react";

export default function Buttons() {
  return (
    <div class="local-storage" id="local-storage">
      <button class="save-data-btn" id="save-data-btn" type="button">
        Save Data
      </button>
      <button class="reset-display-btn" id="reset-display-btn" type="button">
        Reset Display
      </button>
      <button class="reset-storage-btn" id="reset-storage-btn" type="button">
        Reset Storage
      </button>
    </div> 
  );
}

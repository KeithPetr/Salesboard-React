import React from "react";

export default function SalesData() {
  return (
    <>
      <div class="live-sales" id="live-sales">
        <h3 class="sales-amount" id="sales-amount">
          Live Sales - <span id="number-sales"></span>
        </h3>
        <div class="sales-icons" id="sales-icons"></div>
      </div>
      <div class="live-achievements" id="live-achievements">
        <h3 class="achievements-amount" id="achievements-amount">
          Live Achievements - <span id="number-achievements"></span>
        </h3>
        <div class="achievements-icons" id="achievements-icons"></div>
      </div>
      <div class="dollar-amounts">
        <div class="revenue">
          <h3 class="revenue-title">Total Revenue</h3>
          <div class="revenue-amount" id="revenue-amount"></div>
        </div>
        <div class="commission">
          <h3 class="commission-title">Total Commission</h3>
          <div class="commission-amount" id="commission-amount"></div>
        </div>
      </div>
    </>
  );
}

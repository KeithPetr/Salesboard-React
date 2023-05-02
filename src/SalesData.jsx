import React from "react";

export default function SalesData(props) {
  const { salesIcons, salesObjects, revenue } = props
    console.log(props)
  return (
    <>
      <div className="live-sales" id="live-sales">
        <h3 className="sales-amount" id="sales-amount">
          Live Sales - {salesIcons.length}
        </h3>
        <div className="sales-icons" id="sales-icons">{salesIcons}</div>
      </div>
      <div className="live-achievements" id="live-achievements">
        <h3 className="achievements-amount" id="achievements-amount">
          Live Achievements - <span id="number-achievements"></span>
        </h3>
        <div className="achievements-icons" id="achievements-icons"></div>
      </div>
      <div className="dollar-amounts">
        <div className="revenue">
          <h3 className="revenue-title">Total Revenue</h3>
          <div className="revenue-amount" id="revenue-amount">{revenue}</div>
        </div>
        <div className="commission">
          <h3 className="commission-title">Total Commission</h3>
          <div className="commission-amount" id="commission-amount"></div>
        </div>
      </div>
    </>
  );
}

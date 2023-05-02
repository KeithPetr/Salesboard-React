import React from "react";

export default function SalesData(props) {
  const { salesIcons, commission, revenue, achievements } = props
  return (
    <>
      <div className="live-sales">
        <h3 className="sales-amount">
          Live Sales - {salesIcons.length}
        </h3>
        <div className="sales-icons">{salesIcons}</div>
      </div>
      <div className="live-achievements">
        <h3 className="achievements-amount" id="achievements-amount">
          Live Achievements - {achievements.length}
        </h3>
        <div className="achievements-icons">{achievements}</div>
      </div>
      <div className="dollar-amounts">
        <div className="revenue">
          <h3 className="revenue-title">Total Revenue</h3>
          <div className="revenue-amount">{revenue}</div>
        </div>
        <div className="commission">
          <h3 className="commission-title">Total Commission</h3>
          <div className="commission-amount">{commission}</div>
        </div>
      </div>
    </>
  );
}

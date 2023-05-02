import React from 'react'

export default function Header() {
    return (
        <div className="header">
          <h1 className="title">Salesboard 🔔</h1>
          <button className="light-mode-btn" id="light-mode-btn" type="button">
            Dark Mode
          </button>
        </div>
    )
}
import React from 'react'

export default function Header(props) {
  const { theme, toggle } = props;
    return (
        <div className="header">
          <h1 className="title">Salesboard 🔔</h1>
          <button onClick={toggle} className={`light-mode-btn ${theme === 'light' ? 'light-purple' : ''}`} type="button">
            {theme === 'light' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
    )
}
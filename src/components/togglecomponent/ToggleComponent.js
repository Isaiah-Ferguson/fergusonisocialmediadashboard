import React from 'react';
import './ToggleComponent.css';

export default function DayNightToggle(props) {
  const { toggleDarkMode, isDarkMode } = props;

  return (
    <div>
      
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onClick={toggleDarkMode}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};
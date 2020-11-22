import React from 'react'
import { Link } from 'react-router-dom'
import "./TabPicker.styles.css"

const TabPicker = () => {
  return (
    <div className="tab-container">
      <Link to="/search" className="tab">Search Dictionary</Link>
      <Link to="/favorites" className="tab">View Favorites</Link>
    </div>
  );
}

export default TabPicker;
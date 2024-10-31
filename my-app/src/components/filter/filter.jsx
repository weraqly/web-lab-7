import React from 'react';
import './filter.css';

const FilterBar = () => {
  return (
    <section id="filter_section">
        <div className="filter-bar">
        <select className="filter-select">
            <option value="">Category</option>
            <option value="backpacks">Backpacks</option>
            <option value="bottles">Bottles</option>
            <option value="socks">Socks</option>
            <option value="jackets">Jackets</option>
        </select>
        <select className="filter-select">
            <option value="">Price Range</option>
            <option value="0-20">€0 - €20</option>
            <option value="20-50">€20 - €50</option>
            <option value="50-100">€50 - €100</option>
            <option value="100-200">€100 - €200</option>
        </select>
        <select className="filter-select">
            <option value="">Brand</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
        </select>
        </div>
       <div className='second_part'>
       <button className="filter-button">Apply Filters</button>
       </div>
    </section>
  );
};

export default FilterBar;


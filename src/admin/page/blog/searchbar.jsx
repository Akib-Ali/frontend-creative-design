import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const SearchBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {handleFormShow} = props;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="searchbar-container shadow p-3">
      {/* First Row */}
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control me-3 search-input"
          placeholder="Search Title"
        />
        <span
          className="toggle-icon me-2"
          onClick={toggleExpand}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          {isExpanded ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
        </span>
        <button className="btn btn-primary me-2">Active</button>
        <button className="btn btn-secondary me-2">DeActive</button>
        <button className="btn btn-secondary" onClick={handleFormShow}>Add New Blog</button>
      </div>

      {/* Second Row (Expanded Section) */}
      {isExpanded && (
        <div className="mt-3 d-flex align-items-center gap-3">
          {/* Filter By Status Select Box */}
          <div className="filter-status-container">
            <label htmlFor="searchStatus" className="form-label">
              Filter By Status
            </label>
            <select id="searchStatus" className="form-select search-input">
              <option value="active">Active</option>
              <option value="inactive">DeActive</option>
            </select>
          </div>
          <div className="d-flex gap-2 mt-5">
            <button className="btn btn-danger">Filter</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


import React from "react";
import "./Search.css";

const Search = ({ placeholder, onSearchChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};
export default Search;

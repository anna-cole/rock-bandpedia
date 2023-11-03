import React from "react";

function Search({ search, onChangeText }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Bands:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={onChangeText}
      />
    </div>
  );
}

export default Search;

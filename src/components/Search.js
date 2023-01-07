import React from "react";

function Search({ searchInput, handleSearchInput })
{
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchInput} onChange={handleSearchInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

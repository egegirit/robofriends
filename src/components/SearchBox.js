import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bs b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots by name"
        /* Execute function after search field is changed */
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

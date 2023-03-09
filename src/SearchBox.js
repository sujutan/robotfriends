import React from "react";

export default function SearchBox({ handleSearchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
}

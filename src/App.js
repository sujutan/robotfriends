import { useState } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

import "tachyons";

//css
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const handleSearchChange = (searchValue) => {
    setSearchField(searchValue);
  };

  return (
    <div className="tc">
      <h1>Robot Friends</h1>
      <SearchBox handleSearchChange={handleSearchChange} />
      <CardList robots={robots} searchField={searchField} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";

import "tachyons";

//css
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);

  //fetch the fake data from jsonplaceholder
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setRobots(json));
  }, []);

  //handle the searchbox's value changed
  const handleSearchChange = (searchValue) => {
    setSearchField(searchValue);
  };

  if (robots.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox handleSearchChange={handleSearchChange} />
        <CardList robots={robots} searchField={searchField} />
      </div>
    );
  }
}

export default App;

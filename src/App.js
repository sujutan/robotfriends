import CardList from "./CardList";
import { robots } from "./robots";

//css
import "./App.css";

function App() {
  return (
    <div>
      <h1>Robot Friends</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;

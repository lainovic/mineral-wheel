import "./App.css";

import reactLogo from "./assets/react.svg";

import { elements } from "./data";
import Mineral from "./Mineral";

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Mineral wheel</h1>
      <div className="elements">
        {Object.keys(elements).map((it) => (
          <Mineral key={it} symbol={it} />
        ))}
      </div>
    </div>
  );
}

export default App;

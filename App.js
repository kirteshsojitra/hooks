import Hook1 from "./Hook1";
import Hook2 from "./Hook2";
import "./App.css";
import Hook3 from "./Hook3";
import Hook4 from "./Hook4";
import Hook5 from "./Hook5";
import Hook6 from "./Hook6";
import {createContext} from "react";

const Context = createContext("Default Value");
function App() {
  const name = "kirtesh";
  return (
    <div className="App">
      {/* <Hook1 /> */}
      {/* <Hook2 /> */}
      {/* <Hook3 /> */}
      {/* <Hook4 /> */}
      {/* <Hook5 /> */}
      <Context.Provider value={name}>
        <Hook6 />
      </Context.Provider>
    </div>
  );
}

export default App;

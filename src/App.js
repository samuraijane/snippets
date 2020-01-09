import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <fieldset>
      <legend>Choose which of the following are good friends:</legend>
      <div>
        <input type="checkbox" name="anna" id="check_1" />
        <label for="friends">Anna</label>
      </div>
      <div>
        <input type="checkbox" name="billy" id="check_1" />
        <label for="friends">Billy</label>
      </div>
      <div>
        <input type="checkbox" name="carlos" id="check_1" />
        <label for="friends">Carlos</label>
      </div>
    </fieldset>
  );
}

export default App;

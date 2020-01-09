import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Checkbox Example</h1>
      <fieldset>
        <legend>Choose which of the following are good friends:</legend>
        <div>
          <label for="friends">
            <input type="checkbox" name="anna" id="anna" />
            Anna
          </label>
        </div>
        <div>
          <label for="friends">
            <input type="checkbox" name="billy" id="billy" />
            Billy
          </label>
        </div>
        <div>
          <label for="friends">
            <input type="checkbox" name="carlos" id="carlos" />
            Carlos
          </label>
        </div>
      </fieldset>
    </main>
  );
}

export default App;

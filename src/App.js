import React, { useState } from "react";
import { formatData, hasObjectKey, isObjectEmpty } from "./utils";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [error, setError] = useState(null);

  const checkForErrors = data => {
    setError(null);
    if (isObjectEmpty(data)) {
      setError("Please make a selection before submitting.");
    }
    if (hasObjectKey(data, "billy")) {
      setError("Billy is not a friend. He is a jerk.");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = formatData(new FormData(e.target), false);
    const isError = checkForErrors(data);
    // Here we would cancel a call to the server if there is an error
  };

  return (
    <main className="wrap">
      <h1>Checkbox Example</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Choose which of the following are good friends:</legend>
          <div>
            <label htmlFor="friends">
              <input type="checkbox" name="anna" id="anna" />
              Anna
            </label>
          </div>
          <div>
            <label htmlFor="friends">
              <input type="checkbox" name="billy" id="billy" />
              Billy
            </label>
          </div>
          <div>
            <label htmlFor="friends">
              <input type="checkbox" name="carlos" id="carlos" />
              Carlos
            </label>
          </div>
        </fieldset>
        {error ? <p className="error">{error}</p> : ""}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;

import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relative = ["santhosh", "shresha", "shamanth", "rakesh"];

    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {relative.map((rel, index) => (
            <li key={`relativeList ${index + 1}`}>{rel}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;

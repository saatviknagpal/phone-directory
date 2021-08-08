import React from "react";
import Header from "./Header";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <button className = "btn">Add</button>
      <div className = "content">
        <span className = "name">Name</span>
        <span className = "phone">Phone</span>
      </div>
    </div>
  );
}

export default App;

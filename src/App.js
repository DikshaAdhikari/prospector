import React from "react";
import './App.css';
import Sidebar from "./component/sidebar/sidebar";
import Middle from "./component/middle/middle";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Middle />
    </div>
  );
}

export default App;

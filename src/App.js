import React from "react";
import './App.css';
import Sidebar from "./component/sidebar/sidebar";
import Middle from "./component/middle/middle";
import Main from "./component/main-div/main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Middle />
      <Main />
    </div>
  );
}

export default App;

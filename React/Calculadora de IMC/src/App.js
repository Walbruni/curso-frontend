import React from "react";

import CalcularIMC from "./components/Contador";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="body">
      <Header />
      <CalcularIMC />
    </div>
  );
}

export default App;

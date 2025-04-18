import React from "react";
import Home from "./components/Home";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Home />
    </div>
  );
}

export default App;

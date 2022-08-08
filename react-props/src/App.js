import React, { useState } from "react";
import Menubar from "./components/Menubar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [name, setName] = useState("Bridgette");
  return (
    <>
      <Menubar name={name} setName={setName} />
      <Main name={name} />
      <Footer />
    </>
  );
}

export default App;

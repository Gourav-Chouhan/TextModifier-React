import { useState } from "react";
import "./App.css";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const color = mode !== "light" ? "white" : "black";
    document.body.style.backgroundColor = color;
    document.body.style.color = mode === "light" ? "white" : "black";

    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <MainBody mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;

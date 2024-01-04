import React from "react";
import Nav from "./components/Nav";
import Background from "./assets/background.mp4";
import "./App.css";

// npm i react-icons --save
// npm i -D tailwindcss
// npm i react-scroll

function App() {
  return (
    <div className="App">
        <video src={Background} autoPlay playsInline={true} loop muted typeof='mov'>  </video>
            <Nav/>


    </div>
  );
}

export default App;

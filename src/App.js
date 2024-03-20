import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./Components/PlayerList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <PlayersList />
      </div>
    </>
  );
}

export default App;

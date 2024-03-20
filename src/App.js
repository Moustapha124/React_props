import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./Components/PlayerList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PlayersList />
    </div>
  );
}

export default App;

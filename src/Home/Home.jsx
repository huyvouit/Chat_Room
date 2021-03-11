import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="App">
    <div className="content-middle">
      <div className="Title">
        <h1>Chat Room</h1>
      </div>
      <form className="home-container">
        <input
        type="text"
        placeholder="Code Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
        />
        <Link to={`/${roomName}`} className="enter-room-button">
          Join
        </Link> 
      </form>
    </div> 
    </div>
  );
};

export default Home;

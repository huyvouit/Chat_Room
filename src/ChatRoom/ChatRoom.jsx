import React from "react";

import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  // userName
  const [userName, setUserName] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

   // UserBox:
  const handleNewUserName = (event) => {
    // ... Do something...
    setUserName(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage,userName);
    setNewMessage("");
  };

  return (
    <div className="zone">
      <div className="header-wrapper">
        <div className="TitleArea">
          <h2>Ma Sói</h2>
        </div>
        <div className="member-area"> 
        </div>
      </div>
      <div className="chat-main-area">
        <div className="all-user">
          <div className="header-chat-box">
      
          <label for="fname">Username</label>
            <input type="text"
              value={userName}
              onChange={handleNewUserName}
              placeholder="Type your username."
              className="user-input-field"
            />
            <label for="fname">Room: {roomId}</label>
            {/* <h4 className="room-name">Room: {roomId}</h4> */}
          </div>
          <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.user}{ ":\t" }{message.body}
            </li>
            ))}
          </ol>
          </div>
          <div className = "footer-chat-box">
            <input
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
              Send
            </button>
          </div>
        </div>
        <div className="private-user">
          <div className="messengerForm-area"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

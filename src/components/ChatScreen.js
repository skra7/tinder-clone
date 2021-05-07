import React from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      name: "Dhoni",
      image:
        "https://www.jagranimages.com/images/newimg/01092020/01_09_2020-dhoni10_20694805.jpg",
      message: "Whats  up",
    },
    {
      name: "Dhoni",
      image:
        "https://www.jagranimages.com/images/newimg/01092020/01_09_2020-dhoni10_20694805.jpg",
      message: "How is  it going",
    },
    {
      message: "Hi How are you",
    },
  ]);

  const handleSend = (event) => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH DHONI ON 10/08/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__images"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;

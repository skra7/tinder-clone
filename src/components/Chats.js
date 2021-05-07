import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sachin"
        message="Yo whats up"
        timeStamp="40 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/1200px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
      />
      <Chat
        name="Dhoni"
        message="Yo whats up"
        timeStamp="60 seconds ago"
        profilePic="https://www.jagranimages.com/images/newimg/01092020/01_09_2020-dhoni10_20694805.jpg"
      />
      <Chat
        name="Zaheer"
        message="Yo whats up"
        timeStamp="400 seconds ago"
        profilePic="https://st3.cricketcountry.com/wp-content/uploads/cricket/20140521022509.jpeg"
      />
      <Chat
        name="Kohli"
        message="Yo whats up"
        timeStamp="50 seconds ago"
        profilePic="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
    </div>
  );
}

export default Chats;

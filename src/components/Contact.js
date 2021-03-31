import React from "react";
import "./components/Contact.css";

const name = "Marek";
const avatar =
  "https://gravatar.com/avatar/997f6a6f9cb3ebba0e5a0f10bdfa5163?s=400&d=robohash&r=x";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img class="avatar" src={avatar} />
      <div>
        <h3 className="name"> {name} </h3>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

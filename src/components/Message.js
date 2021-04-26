import React, { Component } from "react";
import "./Message.css";

export default class Message extends Component {
  /////////////////////////////////////////////////////////////////////// Render ////////////////////////////////////////////////////////////////////////////

  render() {
    const message = this.props.message.map((message, index) => {
      return (
        <li key={message.id}>
          <p>
            Message posté par {message.pseudo} le {message.id} :
          </p>
          <p className="message" style={{ color: message.color }}>
            {message.desc}
          </p>

          <button onClick={() => this.props.onDelete(message.id)}>
            Supprimer le message
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>Messages :</h2>
        <div className="messages">{message}</div>
      </div>
    );
  }
}

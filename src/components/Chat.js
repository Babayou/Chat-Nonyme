import React, { Component } from "react";
import "./Chat.css";

import Form from "./Form";
import Message from "./Message";

export default class Chat extends Component {
  state = {
    messages: [],
  };
  addMessage = (id, message, pseudo, color) => {
    let messages = this.state.messages.slice();
    messages.push({ id: id, desc: message, pseudo: pseudo, color: color });
    this.setState({ messages: messages });
  };

  handleDelete = (id) => {
    const messages = this.state.messages.slice();
    const index = messages.findIndex(function (message) {
      return message.id === id;
    });
    messages.splice(index, 1);
    this.setState({ messages: messages });
  };

  render() {
    return (
      <div>
        <h1>Le Chat</h1>
        <Form handleSubmit={this.addMessage} />
        <Message message={this.state.messages} onDelete={this.handleDelete} />
      </div>
    );
  }
}

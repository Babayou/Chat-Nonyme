import React, { Component } from "react";
import "./Chat.css";

import Form from "./Form";
import Message from "./Message";

export default class Chat extends Component {
  ////////////////////////////////////////////////////////////////////// State /////////////////////////////////////////////////////////////////
  state = {
    messages: [],
  };

  ///////////////////////////////////////////////////////////////// Methode /////////////////////////////////////////////////////////////////////////

  /* Lorsque le message est envoyé */
  addMessage = (id, message, pseudo, color) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { id: id, desc: message, pseudo: pseudo, color: color },
      ],
    });
  };

  /* Lorsque le message est supprimé */
  handleDelete = (id) => {
    const messages = this.state.messages.slice();
    const index = messages.findIndex(function (message) {
      return message.id === id;
    });
    messages.splice(index, 1);
    this.setState({ messages: messages });
  };

  ///////////////////////////////////////////////////////////////////// render ///////////////////////////////////////////////////////////////////////
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

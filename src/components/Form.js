import React, { Component } from "react";
import "./Form.css";
import { blague } from "./blague.js";

export default class Form extends Component {
  ///////////////////////////////// State ////////////////////////////////////////////////////
  initialState = {
    pseudo: "",
    message: "",
    color: "",
    erreur: "",
  };

  state = this.initialState;

  ////////////////////////////////// Methode /////////////////////////////////////////////////////

  /* Lorsque l'on ecrit dans l'input */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  /* envoyer le message, si le pseudo est vide : Chat-Nonyme, si le message est vide : blague sur les chats, si le message est trop long : message d'erreur */
  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().toLocaleString();
    let { message, pseudo, color } = this.state;

    if (pseudo === "") {
      pseudo = "Chat-Nonyme";
    }

    if (message === "") {
      message = blague[Math.floor(Math.random() * blague.length)];
    }

    if (message.length > 280) {
      this.setState({
        erreur:
          "Tu parles trop! Ton message ne peut pas faire plus de 280 caractères.",
      });
    } else {
      this.props.handleSubmit(id, message, pseudo, color);
      this.setState(this.initialState);
    }
  };

  ///////////////////////////////////////////////////////////// render /////////////////////////////////////////////////////////////////::
  render() {
    return (
      <div>
        <h2>Remplissez le formulaire pour poster un message</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Pseudo : </label>
            <input
              type="text"
              name="pseudo"
              value={this.state.pseudo}
              onChange={this.handleChange}
              autoFocus={true}
            />
          </div>
          <div>
            <label>Message : </label>
            <input
              type="texte"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Couleur du message : </label>
            <input
              type="color"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Envoyer le message" />
        </form>
        <p>{this.state.erreur}</p>
      </div>
    );
  }
}

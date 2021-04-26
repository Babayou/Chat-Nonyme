import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  initialState = {
    pseudo: "",
    message: "",
    color: "",
    erreur: "",
  };

  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().toLocaleString();
    let { message, pseudo, color } = this.state;
    if (pseudo === "") {
      pseudo = "Chat-Nonyme";
    }
    if (message === "") {
      message =
        "Qu'est ce qu'un chien demande quand il entre dans une pharmacie? Puis-je avoir un sirop contre ma toux?";
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

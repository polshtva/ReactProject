import { Component } from "react";
import React from "react";

class Server extends Component {
  render() {
    return (
      <div>
        <div className="server__item">
          <img src={this.props.logo} alt="" className="servers__img" />
          <div className="servers__title">{this.props.title}</div>
          <div className="servers__text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Server;

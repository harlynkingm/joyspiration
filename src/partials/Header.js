import React, { Component } from 'react';
import logo from '../img/icon.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="Joyspiration" />
        <div className="container">
          <h1>Test text</h1>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import insta from '../img/instagram.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <h2 className="logo">Joyspiration</h2>
        </a>
        <a href="https://www.instagram.com/joyspirationblog/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" className="insta"/>
        </a>
      </div>
    )
  }
}

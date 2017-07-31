import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Bitmoji from './Bitmoji';
import insta from '../img/instagram.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/me">
          <Bitmoji />
        </NavLink>
        <NavLink to="/">
          <h2 className="logo">
            <span className="mainlogo">Joyspiration</span>
            <span className="sublogo">
              Your Source For Everyday Outfit Inspiration
            </span>
          </h2>
        </NavLink>
        <a href="https://www.instagram.com/joyspirationblog/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" className="insta"/>
        </a>
      </div>
    )
  }
}

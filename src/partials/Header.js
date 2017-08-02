import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Bitmoji from './Bitmoji';
import insta from '../img/instagram.png';
import blog from '../img/blog.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <NavLink to="/me">
              &nbsp;
              <Bitmoji />
            </NavLink>
            <span className="subtitle unselectable">About Me</span>
          </div>
          <div className="header-icon">
            <NavLink to="/blog">
              &nbsp;
              <img src={blog} alt="Blog" className="blog"/>
            </NavLink>
            <span className="subtitle unselectable">Blog</span>
          </div>
        </div>
        <NavLink to="/">
          <h2 className="logo">
            <span className="mainlogo">Joyspiration</span>
            <span className="sublogo">
              Your Source For Everyday Outfit Inspiration
            </span>
          </h2>
        </NavLink>
        <div className="header-right">
          <div className="header-icon">
            &nbsp;
            <a href="https://www.instagram.com/joyspirationblog/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="insta"/>
            </a>
            <span className="subtitle unselectable">Insta</span>
          </div>
        </div>
      </div>
    )
  }
}
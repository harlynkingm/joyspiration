import React, { Component } from 'react';
import Bitmoji from './Bitmoji';
import insta from '../img/instagram.png';
import share from '../img/share.png';
import blog from '../img/blog.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="header-icon">
            <a href="/me">
              &nbsp;
              <Bitmoji />
            </a>
            <span className="subtitle unselectable">About Me</span>
          </div>
          <div className="header-icon">
            <a href="/blog">
              &nbsp;
              <img src={blog} alt="Blog" className="blog"/>
            </a>
            <span className="subtitle unselectable">Blog</span>
          </div>
        </div>
        <a href="/">
          <h2 className="logo">
            <span className="mainlogo">Joyspiration</span>
            <span className="sublogo">
              Your Source For Everyday Outfit Inspiration
            </span>
          </h2>
        </a>
        <div className="header-right">
          <div className="header-icon">
            &nbsp;
            <a href="#" onClick={function(){ window.open('https://www.facebook.com/sharer/sharer.php?u=http%3A//joyspirationblog.com/','facebook-share-dialog','width=626,height=436');return false;}} href="javascript:void(0)">
              <img src={share} alt="Share on Facebook" className="share"/>
            </a>
            <span className="subtitle unselectable">Share</span>
          </div>
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

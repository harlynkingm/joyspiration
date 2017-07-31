import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  renderPosts(post, index){
    return (
      <Post post={post} key={index} />
    )
  }

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(this.renderPosts)}
      </div>
    )
  }
}

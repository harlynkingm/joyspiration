import React, { Component } from 'react';
import BlogPost from './BlogPost';

export default class BlogPostPage extends Component {
  render() {
    const route = this.props.route;
    let post = this.props.posts.filter((post) => post.route === route);
    if (post.length > 0){
      post = post[0];
    }
    return (
      <BlogPost post={post} simple={false} />
    )
  }
}

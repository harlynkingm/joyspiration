import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Post from './Post';
import BlogPost from './BlogPost';
import hearts from '../img/hearts.svg';

export default class Posts extends Component {
  constructor(props){
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  renderPosts(post, index){
    if (post.type === 'insta'){
      return (
        <Post post={post} key={index} />
      );
    } else if (post.type === 'blog'){
      return (
        <BlogPost post={post} simple={true} key={index} />
      );
    } else {
      return;
    }
  }

  loadMore() {
    if (this.props.loadBoth){
      this.props.loadMoreInsta();
      this.props.loadMoreBlog();
    } else {
      this.props.loadMoreBlog();
    }
  }

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(this.renderPosts)}
        { this.props.next.length > 0 && this.props.loadBoth &&
          <Waypoint onEnter={this.loadMore}>
            <div className="loading">
              <img src={hearts} alt="Loading..."/>
            </div>
          </Waypoint>
        }
      </div>
    )
  }
}

import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Posts from './Posts';
import Me from './Me';

export default class Routes extends Component {
  render() {
    const blogPosts = this.props.posts.filter((post) => post.type === 'blog');
    return (
      <Switch>
        <Route exact path="/" component={
          () => (<Posts posts={this.props.posts} next={this.props.next} loadMoreInsta={this.props.loadMoreInsta} loadMoreBlog={this.props.loadMoreBlog} loadBoth={true}/>)
        }/>
        <Route path="/me" component={
          () => (<Me />)
        }/>
        <Route exact path="/blog" component={
          () => (<Posts posts={blogPosts} next={this.props.next} loadMoreInsta={this.props.loadMoreInsta} loadMoreBlog={this.props.loadMoreBlog} loadBoth={false}/>)
        }/>
      </Switch>
    )
  }
}

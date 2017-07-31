import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Posts from './Posts';
import Me from './Me';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={
          () => (<Posts posts={this.props.posts}/>)
        }/>
        <Route path="/me" component={
          () => (<Me />)
        }/>
      </Switch>
    )
  }
}

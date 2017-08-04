import React, { Component } from 'react';
import moment from 'moment';
import ReactDisqusThread from 'react-disqus-thread';

export default class BlogPost extends Component {

  render() {
    let time = moment.unix(this.props.post.postTime).format("dddd, MMMM Do");
    let route = "/blog/" + this.props.post.route;
    return (
      <div className="post">
        <h5 className="postTime">{time}</h5>
        <h4 className="postTitle">
          <a href={route}>{this.props.post.title}</a>
        </h4>
        <div className="postContent"
          dangerouslySetInnerHTML={{__html:this.props.post.content}} />
        { !this.props.simple &&
          <ReactDisqusThread shortname="joyspirationblog" identifier={this.props.post.route} url={window.location.href}/>
        }
      </div>
    )
  }
}
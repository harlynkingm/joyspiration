import React, { Component } from 'react';
import moment from 'moment';

export default class BlogPost extends Component {


  render() {
    let time = moment.unix(this.props.post.postTime).format("dddd, MMMM Do");
    return (
      <div className="post">
        <h5 className="postTime">{time}</h5>
        <h4 className="postTitle">{this.props.post.title}</h4>
        <div className="postContent"
          dangerouslySetInnerHTML={{__html:this.props.post.content}} />
      </div>
    )
  }
}

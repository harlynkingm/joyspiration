import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery';
import ReactDisqusThread from 'react-disqus-thread';
import Share from './Share';

export default class BlogPost extends Component {

  render() {
    let time = moment.unix(this.props.post.postTime).format("dddd, MMMM Do");
    let route = "/blog/" + this.props.post.route;
    let shareUrl = 'http://joyspirationblog.com' + route;
    let title = this.props.post.title;
    let image = '';
    if (this.props.post.content){
      const parsed = $.parseHTML(this.props.post.content);
      image = $(parsed).find("img").first().prop('src');
    }
    return (
      <div className="post">
        <h5 className="postTime">{time}</h5>
        <h4 className="postTitle">
          <a href={route}>{this.props.post.title}</a>
        </h4>
        <div className="postContent"
          dangerouslySetInnerHTML={{__html:this.props.post.content}} />
        <Share shareUrl={shareUrl} shareTitle={title} shareImage={image} />
        { !this.props.simple &&
          <ReactDisqusThread shortname="joyspirationblog" identifier={this.props.post.route} url={window.location.href}/>
        }
      </div>
    )
  }
}

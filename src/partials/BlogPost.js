import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery';

export default class BlogPost extends Component {
  componentDidMount() {
    this.setHeights();
    window.addEventListener("resize", this.setHeights);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeights);
  }

  setHeights(){
    $("figure").next("figure").each(function() {
      //console.log($(this).prev().find("img").height());
      //console.log($(this).find("img").height());
      let height1 = $(this).prev().find("img").height();
      let height2 = $(this).find("img").height();
      let minHeight = Math.min(height1, height2);
      $(this).prev().height(minHeight);
      $(this).height(minHeight);
    });
  }

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

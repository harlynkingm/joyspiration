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
      let figure1 = $(this).prev();
      let figure2 = $(this);
      // Make heights the same
      let height1 = figure1.find("img").height();
      let height2 = figure2.find("img").height();
      let minHeight = Math.min(height1, height2);
      figure1.height(minHeight);
      figure2.height(minHeight);
      // Add links
      let link1 = figure2.next("p").find("a").attr("href");
      let link2 = figure2.next("p").find("a").next("a").attr("href");
      figure1.find("img").wrap("<a href='" + link1 + "' target='_blank'></a>");
      figure2.find("img").wrap("<a href='" + link2 + "' target='_blank'></a>");
    });
    $(".post a").attr('target','_blank');
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

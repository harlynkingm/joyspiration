import React, { Component } from 'react';
import moment from 'moment';
import like from '../img/like.png';
import comment from '../img/comment.png';

export default class Post extends Component {
  hashtagHtml(caption){
    if (caption.indexOf('#') <= -1){
      return caption;
    }
    let words = caption.split("#");
    words[0] += "<p class='hashtag'>";
    for (var i = 1; i < words.length; i++){
      let url = "https://www.instagram.com/explore/tags/" + words[i];
      let markup = `<a href=${url} target="_blank" rel="noopener noreferrer" class="hashtagLink">#${words[i]}</a>`;
      words[i] = markup;
    }
    words[words.length - 1] += "</p>";
    return {__html: words.join("")};
  }

  render() {
    let newUrl = this.props.post.imageUrl.split("/");
    newUrl = newUrl.slice(0, 4).join("/") + "/" + newUrl[newUrl.length - 1];
    //console.log(newUrl);
    let time = moment.unix(this.props.post.postTime).format("dddd, MMMM Do");
    return (
      <div className="post row">
        <div className="six columns">
          <a href={this.props.post.url} target="_blank" rel="noopener noreferrer">
            <img src={newUrl} alt={this.props.post.caption} className="postImage"/>
          </a>
        </div>
        <div className="six columns">
          <h5 className="postTime">{time}</h5>
          <h4 className="postCaption"
            dangerouslySetInnerHTML={this.hashtagHtml(this.props.post.caption)}>
          </h4>
          <p>
            <a href={this.props.post.url} target="_blank" rel="noopener noreferrer" className="postStats">
            <img src={like} alt={this.props.post.likes + " Likes"} className="postIcon"/>
            {this.props.post.likes}
            <img src={comment} alt={this.props.post.comments + " Comments"} className="postIcon"/>
            {this.props.post.comments}
            </a>
          </p>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import moment from 'moment';

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

  likeIcon(){
    return(
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 51.997 51.997" style={{'enableBackground':'new 0 0 51.997 51.997'}} xmlSpace="preserve" className="postIcon">
      <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z"/>
      </svg>
    )
  }

  commentIcon(){
    return(
      <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 width="511.626px" height="511.626px" viewBox="0 0 511.626 511.626" style={{"enableBackground":"new 0 0 511.626 511.626"}}
      	 xmlSpace="preserve" className="postIcon">
      <g>
      	<path d="M477.371,127.44c-22.843-28.074-53.871-50.249-93.076-66.523c-39.204-16.272-82.035-24.41-128.478-24.41 c-34.643,0-67.762,4.805-99.357,14.417c-31.595,9.611-58.812,22.602-81.653,38.97c-22.845,16.37-41.018,35.832-54.534,58.385 C6.757,170.833,0,194.484,0,219.228c0,28.549,8.61,55.3,25.837,80.234c17.227,24.931,40.778,45.871,70.664,62.811 c-2.096,7.611-4.57,14.846-7.426,21.693c-2.855,6.852-5.424,12.474-7.708,16.851c-2.286,4.377-5.376,9.233-9.281,14.562 c-3.899,5.328-6.849,9.089-8.848,11.275c-1.997,2.19-5.28,5.812-9.851,10.849c-4.565,5.048-7.517,8.329-8.848,9.855 c-0.193,0.089-0.953,0.952-2.285,2.567c-1.331,1.615-1.999,2.423-1.999,2.423l-1.713,2.566c-0.953,1.431-1.381,2.334-1.287,2.707 c0.096,0.373-0.094,1.331-0.57,2.851c-0.477,1.526-0.428,2.669,0.142,3.433v0.284c0.765,3.429,2.43,6.187,4.998,8.277 c2.568,2.092,5.474,2.95,8.708,2.563c12.375-1.522,23.223-3.606,32.548-6.276c49.87-12.758,93.649-35.782,131.334-69.097 c14.272,1.522,28.072,2.286,41.396,2.286c46.442,0,89.271-8.138,128.479-24.417c39.208-16.272,70.233-38.448,93.072-66.517 c22.843-28.062,34.263-58.663,34.263-91.781C511.626,186.108,500.207,155.509,477.371,127.44z"/>
      </g>
      </svg>
    )
  }

  render() {
    let newUrl = this.props.post.imageUrl.split("/");
    newUrl = newUrl.slice(0, 4).join("/") + "/" + newUrl[newUrl.length - 1];
    //console.log(newUrl);
    let time = moment.unix(this.props.post.postTime).format("dddd, MMMM Do");
    return (
      <div className="post row">
          <div className="center">
          <a href={this.props.post.url} target="_blank" rel="noopener noreferrer">
            <img src={newUrl} alt={this.props.post.caption} className="postImage"/>
          </a>
          </div>
          <h5 className="postTime">{time}</h5>
          <h4 className="postCaption"
            dangerouslySetInnerHTML={this.hashtagHtml(this.props.post.caption)} />
          <p>
            <a href={this.props.post.url} target="_blank" rel="noopener noreferrer" className="postStats">
            {this.likeIcon()}
            {this.props.post.likes}
            {this.commentIcon()}
            {this.props.post.comments}
            </a>
          </p>
      </div>
    )
  }
}
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import $ from 'jquery';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
import Header from './partials/Header';
import Routes from './partials/Routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      next: '',
      totalBlogs: 0,
      loadedBlogs: 0
    }
    this.loadData = this.loadData.bind(this);
    this.loadedInstagramData = this.loadedInstagramData.bind(this);
    this.loadedTumblrData = this.loadedTumblrData.bind(this);
    this.loadMoreInsta = this.loadMoreInsta.bind(this);
    this.loadMoreBlog = this.loadMoreBlog.bind(this);
  }

  componentDidMount(){
    this.loadData('https://igpi.ga/joyspirationblog/media/', this.loadedInstagramData);
    this.loadData('https://api.tumblr.com/v2/blog/joyspirationblog.tumblr.com/posts/text?api_key=TTkKheqvTNVfywJhbHvzXFeWzeZ9aiGCfcaa3h9rdCLoBFenGd', this.loadedTumblrData);
  }

  loadData(url, success){
    $.ajax({
      type: 'GET',
      url: url,
      crossDomain: true,
      dataType: 'jsonp',
      success: success,
      error: function(e, status){
        console.log(status);
      }
    });
  }

  loadedInstagramData(data){
    //console.log(data);
    const newData = data.items.map(p => {
        return {
          type: 'insta',
          imageUrl: p.images.standard_resolution.url,
          caption: p.caption.text,
          postTime: parseInt(p.created_time, 10),
          url: p.link,
          comments: p.comments.count,
          likes: p.likes.count
        }
      }
    );
    const tempPosts = this.addData(this.state.posts, newData);
    //console.log(tempPosts);
    let more = '';
    if (data.more_available){
      more = data.next;
    }
    this.setState({
      posts: tempPosts,
      next: more
    });
  }

  loadedTumblrData(data){
    //console.log(data);
    const totalBlogs = data.response.total_posts;
    const blogs = data.response.posts;
    const newData = blogs.map(p => {
      return {
          type: 'blog',
          route: p.slug,
          title: p.title,
          postTime: p.timestamp,
          content: p.body
      }
    });
    const tempCount = newData.length + this.state.loadedBlogs;
    const tempPosts = this.addData(this.state.posts, newData);
    this.setState({
      posts: tempPosts,
      totalBlogs: totalBlogs,
      loadedBlogs: tempCount
    });
  }

  addData(oldData, newData){
    let tempData = oldData.concat(newData);
    return tempData.sort((a, b) => {return b.postTime - a.postTime});
  }

  loadMoreInsta(){
    if (this.state.next){
      this.loadData(this.state.next, this.loadedInstagramData);
    }
  }

  loadMoreBlog(){
    if (this.state.loadedBlogs < this.state.totalBlogs){
      this.loadData('https://api.tumblr.com/v2/blog/joyspirationblog.tumblr.com/posts/text?api_key=TTkKheqvTNVfywJhbHvzXFeWzeZ9aiGCfcaa3h9rdCLoBFenGd&offset=' + this.state.loadedBlogs, this.loadedTumblrData);
    }
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Header />
          <div className="container">
            <Routes posts={this.state.posts} next={this.state.next} loadMoreInsta={this.loadMoreInsta} loadMoreBlog={this.loadMoreBlog} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

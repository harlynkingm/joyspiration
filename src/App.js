import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import imagesLoaded from 'imagesloaded';
import $ from 'jquery';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
import ScrollToTop from './partials/ScrollToTop';
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

  setHeights(){
    $("figure").each(function() {
      if (!$(this).next().is("figure") && !$(this).prev().is("figure")){
        $(this).width('100%');
        if (!$(this).find("img").parent().is("a")){
          let link = $(this).next("p").find("a").attr("href");
          $(this).find("img").wrap("<a href='" + link + "' target='_blank'></a>");
        }
      }
    });
    $("figure").next("figure").each(function() {
      let figure1 = $(this).prev();
      let figure2 = $(this);
      // Make heights the same
      let height1 = figure1.find("img").height();
      let height2 = figure2.find("img").height();
      // console.log(height1 + " " + height2);
      let minHeight = Math.min(height1, height2);
      if (minHeight !== 0){
        figure1.height(minHeight);
        figure2.height(minHeight);
      }
      figure1.width('50%');
      figure2.width('50%');
      // Add links
      if (!figure1.find("img").parent().is("a")){
        let link1 = figure2.next("p").find("a").attr("href");
        let link2 = figure2.next("p").find("a").next("a").attr("href");
        figure1.find("img").wrap("<a href='" + link1 + "' target='_blank'></a>");
        figure2.find("img").wrap("<a href='" + link2 + "' target='_blank'></a>");
      }
    });
    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          $(this).attr("target","_blank");
       }
    });
    //console.log("set heights");
  }

  componentWillReceiveProps(){
    this.setHeights();
  }

  componentDidMount(){
    this.loadData('https://igpi.ga/joyspirationblog/media/?count=10', this.loadedInstagramData);
    this.loadData('https://api.tumblr.com/v2/blog/joyspirationblog.tumblr.com/posts/text?api_key=TTkKheqvTNVfywJhbHvzXFeWzeZ9aiGCfcaa3h9rdCLoBFenGd', this.loadedTumblrData);
    this.setHeights();
    let p = this;
    window.addEventListener("resize", this.setHeights);
    imagesLoaded.makeJQueryPlugin( $ );
    $(".post").imagesLoaded().always(function(instance){
      p.setHeights();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeights);
  }

  componentDidUpdate() {
    this.setHeights();
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
    }, this.setHeights);
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
    }, this.setHeights);
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
        <ScrollToTop>
        <div className="background">
          <Header />
          <div className="container">
            <Routes posts={this.state.posts} next={this.state.next} loadMoreInsta={this.loadMoreInsta} loadMoreBlog={this.loadMoreBlog} />
          </div>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

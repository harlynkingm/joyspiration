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
      posts: []
    }
    this.loadData = this.loadData.bind(this);
    this.loadedData = this.loadedData.bind(this);
  }

  componentDidMount(){
    this.loadData('https://igpi.ga/joyspirationblog/media/');
  }

  loadData(url){
    $.ajax({
      type: 'GET',
      url: url,
      crossDomain: true,
      dataType: 'jsonp',
      success: this.loadedData,
      error: function(e, status){
        console.log(status);
      }
    });
  }

  loadedData(data){
    //console.log(data);
    const newData = data.items.map(p => {
        return {
          imageUrl: p.images.standard_resolution.url,
          caption: p.caption.text,
          postTime: parseInt(p.created_time, 10),
          url: p.link,
          comments: p.comments.count,
          likes: p.likes.count
        }
      }
    );
    const tempPosts = this.state.posts.concat(newData);
    //console.log(tempPosts);
    this.setState({
      posts: tempPosts
    });
    if (data.more_available){
      this.loadData(data.next);
    }
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Header />
          <div className="container">
            <Routes posts={this.state.posts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

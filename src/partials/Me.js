import React, { Component } from 'react';
import me from '../img/me.jpg';

export default class Me extends Component {

  constructor(props){
    super(props);
    this.state = {
      content: [
        "My love of fashion began when, as a child, I would design outfits for my wonderful mother. She was a fashion designer in New York City for 20 years, so clearly this is where my fashion gene came from.",
        "In high school, I developed my unique sense of style. Friends and classmates would compliment my outfits and ask me where I got the clothes I was wearing. In my senior yearbook I was voted Best Dressed, which sparked an idea…",
        "What if I created a blog where I could inspire others by sharing what I was wearing and where I got the pieces?",
        'Fast forward to the beginning of summer 2017: As a Junior in College, I was about to embark on a six-week adventure in Madrid to study abroad. I was googling outfit of the day blogs to help me pick out pieces to bring with me, but I began to get frustrated. Most bloggers don’t actually post their outfit everyday! I decided I want to be that person that you can turn to every morning as you stand in front of your closet, scratching your head and thinking “Ugh, I have no idea what to wear!?”',
        "It honestly brings me joy to know that I’m helping others find their sense of style within their own wardrobe. Thank you so much for your support!"
      ]
    }
  }

  render() {
    return (
      <div className="me row post">
        <div className="four columns">
          <img src={me} />
        </div>
        <div className="eight columns">
          <h4 className="postTitle">About Me</h4>
          {this.state.content.map(
            (paragraph) => <p className="postContent">{paragraph}</p>
          )}
        </div>
      </div>
    )
  }
}

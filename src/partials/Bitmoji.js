import React, { Component } from 'react';
import neutral from '../img/bitmoji/neutral.png';
import blink from '../img/bitmoji/blink.png';
import left from '../img/bitmoji/look_left.png';
import right from '../img/bitmoji/look_right.png';
import yaas from '../img/bitmoji/yaas.png';

const emotions = {
  'neutral': neutral,
  'blink': blink,
  'left': left,
  'right': right,
  'yaas': yaas
}

export default class Bitmoji extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentEmotion: 'neutral'
    }
  }

  componentDidMount(){
    this.neutral(100);
  }

  neutral(waitTime){
    const self = this;
    setTimeout(function(){
      if (self.state.currentEmotion !== 'yaas'){
        self.setEmotion('neutral');
      }
      let r = Math.random();
      if (r < 0.3){
        self.leftRight();
      } else {
        self.blink();
      }
    }, waitTime);
  }

  blink(){
    const self = this;
    const blinkTime = Math.floor((Math.random() * 5000) + 1000);
    setTimeout(function(){
      if (self.state.currentEmotion !== 'yaas'){
        self.setEmotion('blink');
      }
      self.neutral(200);
    }, blinkTime)
  }

  leftRight(){
    const self = this;
    const blinkTime = Math.floor((Math.random() * 5000) + 1000);
    setTimeout(function(){
      if (self.state.currentEmotion !== 'yaas'){
        const leftOrRight = Math.random();
        if (leftOrRight < 0.5){
          self.setEmotion('left');
        } else {
          self.setEmotion('right');
        }
      }
      self.neutral(1000);
    }, blinkTime);
  }

  setEmotion(emotion){
    this.setState({
      currentEmotion: emotion
    });
  }

  render() {
    return (
      <div className="bitmoji" onMouseEnter={() => this.setEmotion('yaas')} onMouseLeave={() => this.setEmotion('neutral')}>
        <img src={emotions[this.state.currentEmotion]} alt="Joybie!" />
      </div>
    )
  }
}

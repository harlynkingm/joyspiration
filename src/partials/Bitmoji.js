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

  setEmotion(emotion, callback){
    this.setState({
      currentEmotion: emotion
    }, callback);
  }

  render() {
    return (
      <div className="bitmoji" onMouseEnter={() => this.setEmotion('yaas')} onMouseLeave={() => this.setEmotion('neutral')}>
        <img src={emotions[this.state.currentEmotion]} alt="Joy!" />
      </div>
    )
  }
}

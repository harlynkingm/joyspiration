import React, { Component } from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');
const WhatsappIcon = generateShareIcon('whatsapp');

export default class Share extends Component {
  render() {
    const shareUrl = this.props.shareUrl;
    const title = this.props.shareTitle;
    const image = this.props.shareImage;
    return (
      <div className="share">
        <h6 className="shareTitle">Share</h6>
        <FacebookShareButton
          url={shareUrl}
          title={title}
          picture={image}
          className="shareButton">
          <FacebookIcon
            size={36}
            round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="shareButton">
          <TwitterIcon
            size={36}
            round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=" - "
          className="shareButton">
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <PinterestShareButton
          url={shareUrl}
          media={image}
          windowWidth={1000}
          windowHeight={730}
          className="shareButton">
          <PinterestIcon size={36} round />
        </PinterestShareButton>
      </div>
    )
  }
}

import React, { Component } from "react";
import DescriptionItem from "./DescriptionItem";

export default class Descriptions extends Component {
  render() {
    return (
      <div className="container text-center">
        <h2 className="h1 features-heading">
          Spotify gives you instant access to millions of songs – from old
          favorites to the latest hits. Just hit play to stream anything you
          like.
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <DescriptionItem
                imgLink="//www.scdn.co/i/generic/premium-img1.jpg"
                title="Listen everywhere"
                description="Spotify works on your computer, mobile, tablet and TV."
              />
              <DescriptionItem
                imgLink="//www.scdn.co/i/generic/premium-img2.jpg"
                title="Unlimited, ad-free music"
                description="No ads. No interruptions. Just music."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <DescriptionItem
                imgLink="//www.scdn.co/i/generic/premium-img3.jpg"
                title="Download music &amp; listen offline"
                description="Keep playing, even when you don't have a connection."
              />
              <DescriptionItem
                imgLink="//www.scdn.co/i/generic/premium-img4.jpg"
                title="Premium sounds better"
                description="Get ready for incredible sound quality."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

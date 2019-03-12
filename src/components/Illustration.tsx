import React, { Component } from "react";
import PropTypes from "prop-types";

interface Props {
  ctaClicked?: false;
}

export default class Illustration extends Component<Props> {
  static propTypes = {
    ctaClicked: PropTypes.bool
  };

  render() {
    return (
      <div className="jumbotron jumbotron-inverse jumbotron-hero market-int">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
              <h1>Spotify is currently not available in your country.</h1>
              <h2>Be the first to know when we launch.</h2>
              <form
                action="/int/why-not-available/add/"
                id="waiting-list-form"
                method="post"
                data-success="Thank you! We have added your email to our list."
                data-error='Oops! Something went wrong, please try again or check out our testing <a href="/help/">help area</a>'
                data-error-facebook="There was a problem retrieving your email address from Facebook.  Error code:"
                data-invalid-email="The email address you supplied is invalid, please check to ensure it is correct."
                data-invalid-ip="We are unable to detect your IP address, please try again."
                data-already-in-waiting-list="It looks like you're already in our waiting list!"
              >
                <div className="email-group">
                  <input
                    type="text"
                    className="email-address"
                    placeholder="Email address"
                    id="email"
                    name="email"
                  />
                  <a href="#" id="signup" className="btn-bottom btn btn-green">
                    Sign Up
                  </a>
                </div>
                <p>
                  <a href="#" className="link-sign-up-with-facebook">
                    Sign up with Facebook
                  </a>
                </p>
                <p className="lead success hidden" id="email-success" />
                <p className=" lead error hidden" id="email-error" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <footer role="contentinfo" className="footer footer-default ">
        <div className="container">
          <nav className="row">
            <div className="col-xs-12 col-md-2">
              <div className="footer-logo">
                <a href="/int/">Spotify</a>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h3 className="nav-title">Company</h3>
              <ul className="nav">
                <li>
                  <a
                    href="/int/about-us/contact/"
                    id="nav-link-about"
                    data-ga-category="menu"
                    data-ga-action="about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.spotifyjobs.com/"
                    id="nav-link-jobs"
                    data-ga-category="menu"
                    data-ga-action="jobs"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="https://newsroom.spotify.com/"
                    id="nav-link-press"
                    data-ga-category="menu"
                    data-ga-action="press"
                  >
                    For the Record
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h3 className="nav-title">Communities</h3>
              <ul className="nav">
                <li>
                  <a
                    href="https://artists.spotify.com/"
                    id="nav-link-artists"
                    data-ga-category="menu"
                    data-ga-action="artists"
                  >
                    For Artists
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.spotify.com/"
                    id="nav-link-developers"
                    data-ga-category="menu"
                    data-ga-action="developers"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="/int/brands/"
                    id="nav-link-brands"
                    data-ga-category="menu"
                    data-ga-action="brands"
                  >
                    Brands
                  </a>
                </li>
                <li>
                  <a
                    href="https://investors.spotify.com/"
                    id="nav-link-investors"
                    data-ga-category="menu"
                    data-ga-action="investors"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="https://spotifyforvendors.com/"
                    id="nav-link-vendors"
                    data-ga-category="menu"
                    data-ga-action="vendors"
                  >
                    Vendors
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h3 className="nav-title">Useful links</h3>
              <ul className="nav">
                <li>
                  <a
                    href="https://support.spotify.com/?utm_source=www.spotify.com&utm_medium=www_footer"
                    id="nav-link-help"
                    data-ga-category="menu"
                    data-ga-action="help"
                  >
                    Help
                  </a>
                </li>
                <li className="hidden-xs ">
                  <a
                    href="/int/redirect/webplayerlink/?utm_medium=www_footer"
                    id="nav-link-play"
                    data-ga-category="menu"
                    data-ga-action="play"
                  >
                    Web Player
                  </a>
                </li>
                <li className="visible-xs hidden-sm ">
                  <a
                    href="/int/free/?utm_medium=www_footer"
                    id="nav-link-free"
                    data-ga-category="menu"
                    data-ga-action="free"
                  >
                    Free Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-4 col-social">
              <ul className="nav">
                <li>
                  <a href="http://instagram.com/spotify">
                    <svg className="social-icon">
                      <use xlinkHref="#instagram-icon">
                        <svg />
                      </use>
                    </svg>
                    <span className="social-text">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/spotify">
                    <svg className="social-icon">
                      <use xlinkHref="#twitter-icon">
                        <svg />
                      </use>
                    </svg>
                    <span className="social-text">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Spotify">
                    <svg className="social-icon">
                      <use xlinkHref="#facebook-icon">
                        <svg />
                      </use>
                    </svg>
                    <span className="social-text">Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="row row-small">
            <div className="col-xs-9 col-md-7">
              <ul className="nav nav-small">
                <li>
                  <a href="/int/legal/">Legal</a>
                </li>
                <li>
                  <a href="/int/privacy/">Privacy Center</a>
                </li>
                <li>
                  <a href="/legal/privacy-policy/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/int/legal/cookies-policy/">Cookies</a>
                </li>
                <li>
                  <a href="/int/legal/privacy-policy/#s3">About Ads</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-3 col-md-5 text-right">
              <a
                className="market"
                href="/int/select-your-country/"
                title="Click to change"
              >
                <div className="media">
                  <div className="media-body media-middle">International</div>
                  <div className="media-right media-middle">
                    <span className="media-object flag-icon flag-icon-int" />
                  </div>
                </div>
              </a>
              <small className="copyright">© 2019 Spotify AB</small>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

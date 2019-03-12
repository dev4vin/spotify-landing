import React from "react";
import PropTypes from "prop-types";
import MVPComponent, { BaseView, BasePresenter } from "../mvp/MVPComponent";
/**
 *
 *
 * @interface HeaderView
 * @extends {BaseView}
 */
interface HeaderView extends BaseView {
  /**
   *
   *
   * @param {boolean} login
   * @returns {*}
   * @memberof HeaderView
   */
  onLogIn(login: boolean): any;
}
/**
 *
 *
 * @class HeaderPresenter
 * @extends {BasePresenter<HeaderView>}
 */
class HeaderPresenter extends BasePresenter<HeaderView> {
  /**
   *
   *
   * @param {boolean} [login=false]
   * @memberof HeaderPresenter
   */
  loginUser(login = false) {
    this.view().onLogIn(login);
  }
}
/**
 *
 *
 * @interface Props
 */
interface Props {
  loggedIn?: boolean;
}
/**
 *
 *
 * @interface State
 */
interface State {
  login: boolean;
}
/**
 *
 *
 * @export
 * @class Header
 * @extends {MVPComponent<HeaderPresenter, Props, State>}
 * @implements {HeaderView}
 */
export default class Header extends MVPComponent<HeaderPresenter, Props, State>
  implements HeaderView {
  /**
   *
   *
   * @static
   * @memberof Header
   */
  static propTypes = {
    loggedIn: PropTypes.bool
  };
  /**
   *Creates an instance of Header.
   * @param {Props} props
   * @memberof Header
   */
  constructor(props: Props) {
    super(props);
  }
  /**
   *
   *
   * @param {boolean} { props: { loggedIn } }
   * @memberof Header
   */
  compose({ props: { loggedIn } }) {
    setTimeout(() => {
      this.presenter().loginUser(loggedIn);
    }, 1000);
  }
  /**
   *
   *
   * @memberof Header
   */
  decompose() {}
  /**
   *
   *
   * @memberof Header
   */
  presenter = (): HeaderPresenter => new HeaderPresenter(this);

  onLogIn(login: boolean) {
    this.setState({
      login: login
    });
  }
  /**
   *
   *
   * @returns
   * @memberof Header
   */
  render() {
    return (
      <nav
        id="js-navbar"
        className="navbar navbar-inverse navbar-static-top "
        role="banner"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="sidepanel"
              data-target="#navbar-nav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="/int/account/overview/" className="user-link hidden">
              <div className="user-icon-container img-circle navbar-user-img">
                <svg className="user-icon">
                  <use xlinkHref="#user-icon" />
                </svg>
              </div>
            </a>
            <a
              className="navbar-brand"
              href="/int/"
              data-tracking='{"category": "menu", "action": "spotify-logo"}'
            >
              <span className="navbar-logo">Spotify</span>
            </a>
          </div>
          <nav
            className="collapse navbar-collapse"
            id="navbar-nav"
            role="navigation"
          >
            <ul className="nav navbar-nav navbar-right nav-main">
              <li>
                <a
                  href="/int/premium/?checkout=false"
                  id="nav-link-premium"
                  data-ga-category="menu"
                  data-ga-action="premium"
                >
                  Premium
                </a>
              </li>
              <li>
                <a
                  href="https://support.spotify.com/?utm_source=www.spotify.com&utm_medium=www_header"
                  id="nav-link-help"
                  data-ga-category="menu"
                  data-ga-action="help"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="/int/download/"
                  id="nav-link-download"
                  className="js-get-spotify js-gtm-event"
                  data-ga-category="menu"
                  data-ga-action="download"
                  data-gtm-event-name="download_spotify_button_clicked"
                  data-tracking='{"category": "download", "action": "download start", "label": "download-navbar"}'
                >
                  Download
                </a>
              </li>
              <li role="separator" className="divider" />
              <li className="alternate sidepanel-item-small ">
                <a
                  href="/int/signup/"
                  id="nav-link-sign-up"
                  data-ga-category="menu"
                  data-ga-action="sign-up"
                >
                  Sign up
                </a>
              </li>
              <li className="alternate sidepanel-item-small">
                <a
                  href="/int/account/overview/"
                  id="header-login-link"
                  className="user-link"
                  data-tracking='{"category": "menu", "action": "log-in"}'
                >
                  <span className="user-text navbar-user-text">Log In</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    );
  }
}

import React from "react";
import './index.css'
import "./App.css";
import MVPComponent, { BaseView, BasePresenter } from "./mvp/MVPComponent";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";
/**
 * cllbacks for various actions in the app view
 *
 * @interface AppView
 * @extends {BaseView}
 */
interface AppView extends BaseView {
  /**
   *
   *
   * @returns {*}
   * @memberof AppView
   */
  onUserLoggedIn(): any;
  /**
   *
   *
   * @returns {*}
   * @memberof AppView
   */
  onUserSubscribed(email: string): any;
  /**
   *
   *
   * @returns {*}
   * @memberof AppView
   */
  onCTAClicked(): any;
}
/**
 * handles call actions from the layout
 *
 * @class AppPresenter
 * @extends {BasePresenter<AppView>}
 */
class AppPresenter extends BasePresenter<AppView> {
  /**
   *
   *
   * @memberof AppPresenter
   */
  callToAction() {
    setInterval(() => {
      this.view().onCTAClicked();
    }, 1000);
  }
  /**
   *
   *
   * @param {string} email
   * @memberof AppPresenter
   */
  subscribeUser(email: string) {
    setInterval(() => {
      this.view().onUserSubscribed(email);
    }, 1000);
  }
  /**
   *
   *
   * @param {Event} e
   * @memberof AppPresenter
   */
  loginClicked(e: Event) {
    e.preventDefault();
    setInterval(() => {
      this.view().onUserLoggedIn();
    }, 1000);
  }
}
/**
 *
 *
 * @export
 * @class App
 * @extends {MVPComponent<AppPresenter>}
 * @implements {AppView}
 */
export default class App extends MVPComponent<AppPresenter> implements AppView {

  presenter = (): AppPresenter => new AppPresenter(this);

  onUserLoggedIn() {
    this.setState({
      loggedIn: true
    });
  }
  state = {
    loggedIn: false,
    subscribed: false,
    ctaClicked: false
  };

  onUserSubscribed(email: string) {
    this.setState({
      subscribed: true
    });
  }
  onCTAClicked() {
    this.setState({
      ctaClicked: true
    });
  }

  compose() {
    this.setState({
      loggedIn: false,
      subscribed: false,
      ctaClicked: false
    });
  }

  decompose() {
    this.setState({
      loggedIn: true,
      subscribed: true,
      ctaClicked: true
    });
  }
  /**
   * return presenter for this app
   *
   * @memberof App
   */
  

  render() {
    return (
      <div className="App">
        <Header />
        <Illustration />
        <Descriptions />
        <Footer />
      </div>
    );
  }
}



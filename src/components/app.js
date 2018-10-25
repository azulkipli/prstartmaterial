import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Sidebar from "./sidebar";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  constructor() {
    super();
    // set initial time:
    this.state.sidebarOpen = false;
    this.state.currentUrl = "/";
  }

  openSidebar = () => {
    this.setState({ sidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false });
  };

  handleRoute = e => {
    this.currentUrl = e.url;
    console.log("e", e);
    this.closeSidebar();
  };

  render() {
    console.log("currentUrl", this.state.currentUrl);
    return (
      <div id="app">
        <Sidebar
          sidebarOpen={this.state.sidebarOpen}
          closeSidebar={this.closeSidebar}
          openSidebar={this.openSidebar}
          handleRoute={this.handleRoute}
          currentUrl={this.state.currentUrl}
        />
        <Header openSidebar={this.openSidebar} />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}

import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Nav from "./components/Nav"
import Callback from "./components/Callback"
import Auth from "./Auth/Auth"

class App extends Component {
  constructor(props) {
    super(props)
    this.auth = new Auth(this.props.history)
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    )
  }
}

export default App

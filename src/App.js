import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Single from './components/Single'
import SingleAsync from './components/SingleAsync'

import Multi from './components/Multi'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          <br />
          <Single />
          <br />
          <SingleAsync />
          <br />
          <Multi />
        </div>
      </div>
    )
  }
}

export default App

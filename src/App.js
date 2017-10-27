import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Single from './components/Example/Single'
import SingleAsync from './components/Example/SingleAsync'
import Multi from './components/Example/Multi'
import MultiAsync from './components/Example/MultiAsync'

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
          <br />
          <MultiAsync />
        </div>
      </div>
    )
  }
}

export default App

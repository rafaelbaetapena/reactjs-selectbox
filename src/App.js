import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Selectbox from "./Selectbox.jsx"

const data =[
  {value: "1", text: "Teste221"},
  {value: "2", text: "Teste2"},
  {value: "3", text: "Teste3"},
  {value: "4", text: "Teste4"},
  {value: "5", text: "Teste5"},
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Selectbox label="Produtos" options={data}  />
        </div>
      </div>
    );
  }
}

export default App

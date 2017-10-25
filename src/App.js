import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, ButtonToolbar, Button } from 'react-bootstrap';

import Selectbox from "./Selectbox"
import Selectbox2 from "./Selectbox2"

const reactBootstrap = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
)

const data =[
  {value: "1", label: "Teste221"},
  {value: "2", label: "Teste2"},
  {value: "3", label: "Teste3"},
  {value: "4", label: "Teste4"},
  {value: "5", label: "Teste5"},
]

function logChange(val){
  console.log("Selected: " + JSON.stringify(val));
}

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
          {reactBootstrap}
          <br />
          {/* <Selectbox label="Produtos" options={data}  /> */}
          <br />
          <Selectbox2 
            label="Produtos 2"
            name="produtos-2"
            value="one"
            options={data}
            onChange={logChange}
             />
        </div>
      </div>
    );
  }
}

export default App

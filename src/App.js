import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Selectbox from "./Selectbox"

class App extends Component {
  
  constructor() {
    super()
    this.state = { 
      valueAsync: 1, 
      valueFixo: 4
    }

    this.handleChangeValueFixo = this.handleChangeValueFixo.bind(this)
    this.handleChangeValueAsync = this.handleChangeValueAsync.bind(this)


    this.data = [
      {value: 1, label: "Teste1"},
      {value: 2, label: "Teste2"},
      {value: 3, label: "Teste3", className: "text-green"},
      {value: 4, label: "Teste4", className: "text-red"},
      {value: 5, label: "Teste5"},
    ]
  }

  getOptions(input, callback) {
      return fetch(`https://reqres.in/api/users?per_page=20`)
        .then((response) => {
          return response.json()
        }).then((json) => {
          const data = json.data
          const options = data.map((v) => {
            return { 
              value: v.id, 
              label: `${v.first_name} ${v.last_name}`
            }
          })
          return { options: options }
        })
    }

  handleChangeValueFixo (val) {
    this.setState({ valueFixo: val.value })
  }

  handleChangeValueAsync (val) {
    this.setState({ valueAsync: val.value })
  }

  render() {
    const valueFixo = this.state.valueFixo
    const valueAsync = this.state.valueAsync
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          <br />
          <Selectbox
            label="Select fixo"
            name="select-fixo"
            value={valueFixo}
            onChange={this.handleChangeValueFixo}
            options={this.data}
            />
          <br />
          <Selectbox
            label="Select fixo disabled"
            name="select-fixo"
            value={valueFixo}
            onChange={this.handleChangeValueFixo}
            options={this.data}
            disabled={true}
            />
          <br />
          <Selectbox
            label="Select Async"
            name="select-async"
            value={valueAsync}
            onChange={this.handleChangeValueAsync}
            loadOptions={this.getOptions}
          />
        </div>

      </div>
    )
  }
}

export default App

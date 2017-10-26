import React, { Component } from 'react'
import Selectbox from "../Selectbox"

export default class SingleAsync extends Component {
    constructor(props){
        super(props)
        this.state = { value: 4 }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (val){
        this.setState({ ...this.state, value: val.value })
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

    render(){
        const value = this.state.value

        return (
            <div>
                <Selectbox
                label="Single Async"
                name="SingleAsync"
                value={value}
                onChange={this.handleChange}
                loadOptions={this.getOptions}
                autoload={false} />
            </div>
        )
    }
}

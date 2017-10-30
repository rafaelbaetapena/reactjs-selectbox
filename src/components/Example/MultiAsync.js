import React, { Component } from 'react'
import Selectbox from "../Global/Selectbox"

export default class MultiAsync extends Component {
    constructor(props){
        super(props)
        this.state = { 
            value: [10, 12],
            disabled: true
        }
        this.handleChangeDisabled = this.handleChangeDisabled.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChangeDisabled (e) {
        this.setState({
            ...this.state,
            disabled: e.target.checked
        })
    }

    handleChange (val){
        this.setState({ 
            ...this.state, 
            value: val.map(v => ( v.value )) 
        })
    }

    getOptions(input, callback) {
        return fetch(`https://reqres.in/api/users?delay=1&per_page=20`)
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
        const disabled = this.state.disabled

        return (
            <div>
                <div>
                    <Selectbox
                        isAsync={true}
                        multi={true}
                        classNameSelect="custom-select"
                        label="Multi Async"
                        name="MultiAsync"
                        value={value}
                        onChange={this.handleChange}
                        loadOptions={this.getOptions}
                        disabled={disabled} />
                </div>
                <div>
                    <label className="checkbox">
                        <input type="checkbox" checked={disabled} name="disabled" onChange={this.handleChangeDisabled} /> Disabled
                    </label>
                </div>
            </div>
        )
    }
}

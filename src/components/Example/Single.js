import React, { Component } from 'react'
import Selectbox from "../Global/Selectbox"

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

export default class Single extends Component {
    constructor(props){
        super(props)
        this.state = { value: "peppermint" }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (val){
        const value = val == null ? null : val.value
        this.setState({ ...this.state, value: value })
    }

    render(){
        const value = this.state.value

        return (
            <div>
                <Selectbox
                    label="Single"
                    name="Single"
                    value={value}
                    onChange={this.handleChange}
                    options={FLAVOURS}
                    placeholder="Selecione o sabor"
                    noResultsText="Nenhum sabor encontrado" />
            </div>
        )
    }
}

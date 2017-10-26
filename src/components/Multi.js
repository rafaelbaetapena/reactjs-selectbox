import React, { Component } from 'react'
import Selectbox from "./Selectbox"

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

export default class Multi extends Component {
    constructor(props){
        super(props)
        this.state = { value: ["peppermint"] }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (val){ 
        this.setState({ 
            ...this.state, 
            value: val.map(v => ( v.value )) 
        })
    }

    render(){
        const value = this.state.value

        return (
            <div>
                <Selectbox
                    label="Multi"
                    name="Multi"
                    value={value}
                    onChange={this.handleChange}
                    options={FLAVOURS}
                    searchable={false}
                    placeholder="Selecione o sabor"
                    noResultsText="Nenhum sabor encontrado"
                    multi={true} />
            </div>
        )
    }
}

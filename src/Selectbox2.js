import React from 'react'

import Select2 from 'react-select';
import 'react-select/dist/react-select.css';

const Selectbox2 = props => {
    const label = props.label
    const name = props.name
    const value = props.value
    const options = props.options
    const onChange = props.onChange
    
    return (
        <div>
            <label>{label}</label>
            <Select2 
            name={name}
            value={value}
            options={options}
            onChange={onChange} />
        </div>
    )
}

export default Selectbox2;
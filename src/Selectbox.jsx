import React from 'react'

const Selectbox = props => (
    <div>
        <label>{props.label}</label>
        <select>
            {props.data.map(
                (v, i) => (
                    <option value={v.value}>{v.text}</option>
                )
            )}
        </select>
    </div>
)

export default Selectbox;
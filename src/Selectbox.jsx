import React from 'react'

const Selectbox = props => {
    const label = props.label
    const placeholder = props.placeholder
    const options = props.options
    const onClick = props.onClick
    const p = (placeholder!==undefined) ? <option value="">{placeholder}</option> : null

    return (
        <div>
            <label>{label}</label>
            <select>
                {p}
                {options.map(
                    (v, i) => (
                        <option key={v.value} value={v.value}>{v.text}</option>
                    )
                )}
            </select>
        </div>
    )
}

export default Selectbox;
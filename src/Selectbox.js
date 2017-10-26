import React from 'react'

import Label from './Label'

// https://github.com/JedWatson/react-select
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

const Selectbox = props => {
    // label
    const classNameLabel = props.classNameLabel
    const label = props.label
    // select
    const classNameSelect = props.classNameSelect
    const name = props.name
    const value = props.value
    const multi = props.multi
    const removeSelected = props.removeSelected
    const isLoadingExternally = props.isLoadingExternally
    const disabled = props.disabled
    const joinValues = props.joinValues
    const noResultsText = "Nenhum resultado encontrado."
    const placeholder = "Selecione"
    const required = props.required
    const searchable = props.searchables
    const onChange = props.onChange

    const isAsync = (props.loadOptions !== undefined)
    const loadOptions = props.loadOptions
    const options = props.options

    const element = isAsync ?
        <ReactSelect.Async 
            className={classNameSelect}
            name={name}
            value={value}
            onChange={onChange}
            multi={multi}
            removeSelected={removeSelected}
            isLoading={isLoadingExternally}
            disabled={disabled}
            joinValues={joinValues}
            noResultsText={noResultsText}
            placeholder={placeholder}
            required={required}
            searchable={searchable}
            loadOptions={loadOptions} />
        :
        <ReactSelect 
            className={classNameSelect}
            name={name}
            value={value}
            onChange={onChange}
            multi={multi}
            removeSelected={removeSelected}
            isLoading={isLoadingExternally}
            disabled={disabled}
            joinValues={joinValues}
            noResultsText={noResultsText}
            placeholder={placeholder}
            required={required}
            searchable={searchable}
            options={options} />
            
    return (
        <div>
            <Label 
                className={classNameLabel}
                label={label} />
            {element}
        </div>
    )
}

// const SelectboxAsync = props => {
//     // label
//     const classNameLabel = props.classNameLabel
//     const label = props.label
//     // select
//     const classNameSelect = props.classNameSelect
//     const name = props.name
//     const value = props.value
//     const loadOptions = props.loadOptions
//     const onChange = props.onChange
    
//     return (
//         <div>
//             <Label 
//                 className={classNameLabel}
//                 label={label} />
//             <ReactSelect.Async
//                 className={classNameSelect}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//                  />
//         </div>
//     )
// }

export default Selectbox;
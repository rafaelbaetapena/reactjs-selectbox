import React from 'react'

import Label from './Label'

// https://github.com/JedWatson/react-select
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

const Selectbox = props => {
    // select
    const classNameSelect = props.classNameSelect
    const name = props.name
    const value = props.value
    const disabled = props.disabled
    const noResultsText = (props.noResultsText === undefined) ? "Nenhum resultado encontrado" : props.noResultsText
    const placeholder = (props.placeholder === undefined) ? "Selecione" : props.placeholder
    const required = props.required
    const searchable = props.searchable
    const onChange = props.onChange
    // multi
    const multi = props.multi
    const removeSelected = props.removeSelected
    const joinValues = props.joinValues
    // no async
    const isLoadingExternally = props.isLoadingExternally
    const options = props.options
    // async
    const loadOptions = props.loadOptions
    const autoload = props.autoload
    
    const element = (props.loadOptions !== undefined) ?
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
            loadOptions={loadOptions}
            autoload={autoload} />
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
                className={props.classNameLabel}
                label={props.label} />
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
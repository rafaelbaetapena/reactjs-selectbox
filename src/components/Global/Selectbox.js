import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Label from './Label'

// https://github.com/JedWatson/react-select
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

export default class Selectbox extends Component {
    render() {
        const {
            // label
            classNameLabel,
            label,
            // select 
            isAsync,
            classNameSelect,
            name,
            value,
            disabled,
            required,
            searchable,
            onChange,
            noResultsText,
            placeholder,
            // select multi
            multi,
            removeSelected,
            joinValues,
            // select no async
            isLoadingExternally,
            options,
            // select async
            loadOptions,
            autoload
        } = this.props

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
                    className={classNameLabel}
                    label={label} />
                {element}
            </div>
        )
    }
}

Selectbox.defaultProps = {
    // select
    isAsync: false,
    disabled: false,
    required: false,
    searchable: true,
    // TODO: passar as string para o arquivo strings
    noResultsText: 'Nenhum resultado encontrado',
    placeholder: 'Selecione',
    // select multi
    multi: false,
    removeSelected: true,
    joinValues: true,
    // select no async
    isLoadingExternally: false,
    // select async
    autoload: true
}

Selectbox.propTypes = {
    // label
    classNameLabel: PropTypes.string,
    label: PropTypes.string,
    // select
    isAsync: PropTypes.bool,
    classNameSelect: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    searchable: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    noResultsText: PropTypes.string,
    placeholder: PropTypes.string,
    // select multi
    multi: PropTypes.bool,
    removeSelected: PropTypes.bool,
    joinValues: PropTypes.bool,
    // select no async
    isLoadingExternally: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    // select async
    loadOptions: PropTypes.func,
    autoload: PropTypes.bool,
}

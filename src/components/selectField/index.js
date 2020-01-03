import React from 'react';
import Select from 'react-select'
import { SelectWrapper, Label } from './styles';

const SelectField = (props) => {

    const { id, options, label, placeholder, defaultValue, handleChange, enabled = true, isSearchable = false, style } = props;

    return (
        <SelectWrapper enabled={enabled} style={style}>
            <Select
                theme={theme => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary25: '#9191FF',
                        primary: '#3737CC',
                    },
                })}
                id={id}
                options={options}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={handleChange}
                isSearchable={isSearchable}
            />
            <Label>{label}</Label>
        </SelectWrapper>
    )
}

export default SelectField;
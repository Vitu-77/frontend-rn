import React from 'react';
import { InputWrapper, Input, Label } from './styles';

const InputField = (props) => {

    const { style, id, placeholder = '', type, value, label, handleChange, span, enabled = true } = props;

    return (
        <InputWrapper enabled={enabled} span={span} style={style}>
            <Label>{label}</Label>
            <Input
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                type={type}
                autoComplete='off'
            />
        </InputWrapper>
    )
}

export default InputField;
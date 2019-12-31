import React, { useState } from 'react';
import { Wrapper, Radio, Label, Inner } from './styles';

const RadioField = ({ label, style, handleChange }) => {

    const [checked, setChecked] = useState(false);

    return (
        <Wrapper style={style}>
            <Radio onClick={() => {
                handleChange();
                setChecked(!checked);
            }}>
                <Inner checked={checked} />
            </Radio>
            <Label>{label}</Label>
        </Wrapper>
    )
}

export default RadioField;
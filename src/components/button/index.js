import React from 'react';
import Btn from './styles';

const PrimaryButton = (props) => {
    const { type = 'button', content, handleClick = null, padding, span, disabled = false, style } = props;
    return <Btn
        style={style}
        type={type}
        onClick={handleClick}
        padding={padding}
        span={span}
        disabled={disabled}
        btnType='primary'>
        {content}
    </Btn>
}
const SecondaryButton = (props) => {
    const { type = 'button', content, handleClick = null, padding, span, disabled = false, style } = props;
    return <Btn
        style={style}
        type={type}
        onClick={handleClick}
        padding={padding}
        span={span}
        disabled={disabled}
        btnType='secondary'>
        {content}
    </Btn>
}

export { PrimaryButton, SecondaryButton }
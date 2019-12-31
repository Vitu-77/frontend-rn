import React from 'react';
import Btn from './styles';

const PrimaryButton = (props) => {
    const { type = 'button', content, handleClick = null, padding, span } = props;
    return <Btn
        type={type}
        onClick={handleClick}
        padding={padding}
        span={span}
        btnType='primary'>
        {content}
    </Btn>
}
const SecondaryButton = (props) => {
    const { type = 'button', content, handleClick = null, padding, span } = props;
    return <Btn
        type={type}
        onClick={handleClick}
        padding={padding}
        span={span}
        btnType='secondary'>
        {content}
    </Btn>
}

export { PrimaryButton, SecondaryButton }
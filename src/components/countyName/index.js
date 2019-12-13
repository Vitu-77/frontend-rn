import React from 'react';
import { Wrapper, Name, Capital } from './styles';

const CountyName = ({ countyName, isCapital }) => {
    return (
        <Wrapper>
            <Capital display={isCapital ? 'block' : 'none'}>capital</Capital>
            <Name>{countyName}</Name>
        </Wrapper>
    )
}

export default CountyName;
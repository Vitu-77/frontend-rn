import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 135px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* box-shadow: ${props => `0 0 200px 1px ${props.theme.blackOpacity2}`}; */

    & > button {
        margin-top: 20px;
    }
`;

const Message = styled.p`
    font-size: 26px;
    text-align: center;
    width: 100%;
    color: ${props => props.theme.primaryGrey};
`;

export { Wrapper, Message }
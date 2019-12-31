import React from 'react';
import { Wrapper, InnerWrapper, Content, Image } from './styles';
import Img from '../../assets/icons/close-suggestions.svg';

const RemovableSmallItem = ({ content, handleClick }) => {
    return (
        <Wrapper>
            <Content>{content}</Content>
            <Image src={Img} alt='Remover' onClick={handleClick} />
        </Wrapper>
    );
}

const RemovableLargeItem = ({ content = [], handleClick }) => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Content>{content[0]}</Content>
                <Content>{content[1]}</Content>
            </InnerWrapper>
            <Image src={Img} alt='Remover' onClick={handleClick} />
        </Wrapper>
    );
}

export { RemovableSmallItem, RemovableLargeItem };
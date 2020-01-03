import React from 'react';
import { Wrapper, InnerWrapper, Content, Image, Link } from './styles';
import Img from '../../assets/icons/close-suggestions.svg';

const RemovableSmallItem = ({ content, handleClick }) => {
    return (
        <Wrapper>
            <Content>{content}</Content>
            <Image src={Img} alt='Remover' onClick={handleClick} />
        </Wrapper>
    );
}

const RemovableLargeItem = ({ content = [], handleClick, href, isLink = false }) => {
    if (isLink) {
        return (
            <Wrapper>
                <Link href={href}>
                    <InnerWrapper>
                        <Content>{content[0]}</Content>
                        <Content>{content[1]}</Content>
                    </InnerWrapper>
                </Link>
                <Image src={Img} alt='Remover' onClick={handleClick} />
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper>
                <InnerWrapper>
                    <Content>{content[0]}</Content>
                    <Content>{content[1]}</Content>
                </InnerWrapper>
                <Image src={Img} alt='Remover' onClick={handleClick} />
            </Wrapper>
        )
    }
}


export { RemovableSmallItem, RemovableLargeItem };
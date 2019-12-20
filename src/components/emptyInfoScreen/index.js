import React from 'react';
import { Wrapper, Message } from './styles';
import { PrimaryButton } from '../button/index';

const EmptyInfoScreen = () => (
    <Wrapper>
        <Message>
            Este município ainda não possui informações cadastradas.
        </Message>
        <PrimaryButton content='Adicionar Informações'/>
    </Wrapper>
)

export default EmptyInfoScreen;
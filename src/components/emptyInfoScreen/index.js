import React from 'react';
import { Wrapper, Message } from './styles';
import { PrimaryButton } from '../button/index';
import { Link, useLocation } from 'react-router-dom';

const EmptyInfoScreen = () => {

    const { pathname } = useLocation();

    return (
        <Wrapper>
            <Message>
                Este município ainda não possui informações cadastradas.
            </Message>
            <Link to={`${pathname}/add_infos`} style={{
                marginTop: '20px'
            }}>
                <PrimaryButton content='Adicionar Informações' />
            </Link>
        </Wrapper>
    )

}

export default EmptyInfoScreen;
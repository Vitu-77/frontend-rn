import React from 'react';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../components/button';
import { Main, NoMatchMessage, Message404 } from './styles';

const NoMatch = () => {

    const history = useHistory();

    return (
        <React.Fragment>
            <Main>
                <Message404>404</Message404>
                <NoMatchMessage>Página não encontrada</NoMatchMessage>
                <PrimaryButton content='Voltar a navegação' handleClick={() => history.goBack()} />
            </Main>
        </React.Fragment>
    )
};

export default NoMatch;
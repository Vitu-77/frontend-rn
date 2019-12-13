import React, { useState } from 'react';
import Cookie from 'react-cookies';
import ExitIcon from '../../assets/icons/exit.svg';
import { HeaderWrapper, Logo, HeaderOptions, User, Exit } from './styles';

const Header = () => {
    
    const [userName] = useState(Cookie.load('__username') ?? 'Convidado');
    const [userLevel] = useState(Cookie.load('__userlevel') ?? 'Convidado');

    const handleLogOut = () => {
        Cookie.remove('__authenticationtoken');
        window.location.replace('/');
    }

    return (
        <HeaderWrapper>
            <Logo>
                <h1>Logo do Sistema</h1>
            </Logo>
            <HeaderOptions>
                <User>
                    <h3>{userName}</h3>
                    <span>{userLevel}</span>
                </User>
                <Exit onClick={handleLogOut}>
                    <span>Sair</span>
                    <img src={ExitIcon} alt='exit' />
                </Exit>
            </HeaderOptions>
        </HeaderWrapper>
    )
}

export default Header;
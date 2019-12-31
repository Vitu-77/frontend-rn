import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import ExitIcon from '../../assets/icons/exit.svg';
import { HeaderWrapper, Logo, HeaderOptions, User, Exit } from './styles';
import { UserContext } from '../../global/providers/user';
import { redirectTo } from '../../util/navigation';

const Header = ({ isLoginPage = false }) => {

    const { _user, _setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [userLevel, setUserLevel] = useState('');

    const normalizeUserInformations = (username, acessLevel) => {

        setUsername(username || 'Anônimo');

        switch (acessLevel) {
            case 1: return setUserLevel('Usuário Padrão');
            case 2: return setUserLevel('Administrador');
            case 3: return setUserLevel('Administrador Majoritário');
            default: return setUserLevel('Anônimo');
        }
    }

    useEffect(() => {
        normalizeUserInformations(_user.username, _user.acessLevel);
    }, [_user]);

    const handleLogOut = () => {
        Cookies.remove('AUTH_TOKEN');
        _setUser({});
        redirectTo('/login');
    }

    const handleLogIn = () => {
        return redirectTo('/login');
    }

    return (
        <HeaderWrapper>
            <Logo>
                <h1>Logo do Sistema</h1>
            </Logo>
            <HeaderOptions isLoginPage={isLoginPage}>
                <User>
                    <h3>{username}</h3>
                    <span>{userLevel}</span>
                </User>
                <Exit onClick={_user.username ? handleLogOut : handleLogIn}>
                    <span>{_user.username ? 'Sair' : 'Entrar'}</span>
                    <img src={ExitIcon} alt='Entar / Sair' />
                </Exit>
            </HeaderOptions>
        </HeaderWrapper>
    )
}

export default Header;
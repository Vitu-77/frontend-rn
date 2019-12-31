import React, { useState } from 'react';
import Header from '../../components/header';
import InputField from '../../components/inputField';
import RadioField from '../../components/radioField';
import { Link } from 'react-router-dom';
import { authenticate } from '../../services/api';
import { redirectTo } from '../../util/navigation';
import {
    Main,
    LoginWrapper,
    LoginForm,
    LoginHeader,
    Button,
    CreateAcc,
    Error
} from './styles';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { sucess, error } = await authenticate(username, password, rememberMe);

        if (error) {
            setError(true);
            setUsername('');
            setPassword('');
        }

        if (sucess) {
            return redirectTo('/');
        }
    }

    return (
        <React.Fragment>
            <Header isLoginPage={true} />
            <Main>
                <LoginWrapper error={error}>
                    <LoginHeader>
                        <h1>Entrar</h1>
                    </LoginHeader>
                    <LoginForm>
                        <InputField
                            label='Nome de Usuário'
                            type='text'
                            value={username}
                            handleChange={(e) => setUsername(e.target.value)}
                            style={{ width: '260px' }}
                        />
                        <InputField
                            label='Senha'
                            type='password'
                            value={password}
                            handleChange={(e) => setPassword(e.target.value)}
                            style={{ width: '260px', marginTop: '20px' }}
                        />
                        <RadioField
                            label='Lembrar-me'
                            handleChange={() => setRememberMe(!rememberMe)}
                            style={{ margin: '20px 0 0 0' }}
                        />
                        <Button type='button' onClick={handleSubmit}>Entrar</Button>
                        <CreateAcc>
                            Não possui uma conta? Clique <Link to='/register'>aqui </Link> para criar
                        </CreateAcc>
                        <Error error={error}>Credenciais incorretas</Error>
                    </LoginForm>
                </LoginWrapper>
            </Main>
        </React.Fragment>
    )
}

export default LoginPage;
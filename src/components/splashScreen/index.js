import React from 'react';
import loading from '../../assets/animations/loading.svg';
import { Wrapper, Image } from './styles';

const SplashScreen = () => (
    <Wrapper>
        <Image src={loading} alt='Carregando...' />
    </Wrapper>
)

export default SplashScreen;
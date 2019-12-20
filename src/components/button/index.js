import React from 'react';
import Btn from './styles';

const PrimaryButton = ({ content, handleClick = null }) => (
    <Btn onClick={handleClick} type='primary'>{content}</Btn>
)
const SecondaryButton = ({ content, handleClick = null }) => (
    <Btn onClick={handleClick} type='secondary'>{content}</Btn>
)

export { PrimaryButton, SecondaryButton }
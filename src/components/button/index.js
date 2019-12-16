import React from 'react';
import Btn from './styles';

const PrimaryButton = ({ content, handleClick }) => (
    <Btn onClick={handleClick} type='primary'>{content}</Btn>
)
const SecondaryButton = ({ content, handleClick }) => (
    <Btn onClick={handleClick} type='secondary'>{content}</Btn>
)

export { PrimaryButton, SecondaryButton }
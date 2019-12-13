import React from 'react';
import Btn from './styles';

const PrimaryButton = ({ content }) => <Btn type='primary'>{content}</Btn>
const SecondaryButton = ({ content }) => <Btn type='secondary'>{content}</Btn>

export { PrimaryButton, SecondaryButton }
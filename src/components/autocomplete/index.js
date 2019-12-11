import React, { useState, useEffect } from 'react';
import { Container, Input, Option } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { capitalize, ignoreAcentuation } from '../../util/stringHandler';

const AutoComplete = ({ modifyState, placeholder, options, filter, closeSuggestions }) => {

    const [matches, setMatches] = useState([]);
    const [matchesIterator, setMatchesIterator] = useState(0);

    useEffect(() => {
        if (closeSuggestions) {
            setMatches([]);
            setMatchesIterator(0);
        }
    }, [closeSuggestions]);

    const handleOptionClick = (value) => {

        const autocompleteInput = document.querySelector('#autocomplete-input');

        autocompleteInput.value = capitalize(value);

        setMatches([]);
        setMatchesIterator(0);
        modifyState(value);
        filter(value);
    }

    const handleInputChange = (e) => {

        modifyState(capitalize(e.target.value));
        setMatchesIterator(0);

        const filterParam = ignoreAcentuation(e.target.value)
            .trim()
            .toLowerCase();

        if (filterParam.length >= 3 && !matches.includes(filterParam)) {
            const matches = options.filter(word => {
                return ignoreAcentuation(word)
                    .toLowerCase()
                    .trim()
                    .includes(filterParam)
            });

            setMatches(matches);
        }

        if (filterParam <= 2) {
            setMatches([]);
        }
    }

    const handleInputKeyPress = (e) => {
        const currentValue = e.target.value;
        const pressedKey = e.key;

        if (pressedKey === 'Enter') {
            filter(currentValue);
            setMatches([]);
        }

        if (pressedKey === 'ArrowDown') {
            if (matches[matchesIterator]) {
                const value = matches[matchesIterator];
                e.target.value = capitalize(value);
                setMatchesIterator(matchesIterator + 1);
            }
        }

        if (pressedKey === 'ArrowUp') {
            if (matches[matchesIterator - 1]) {
                const value = matches[matchesIterator - 1];
                e.target.value = capitalize(value);
                setMatchesIterator(matchesIterator - 1);
            }
        }
    }

    return (
        <Container>
            <Input
                id='autocomplete-input'
                placeholder={placeholder}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
                onKeyDown={handleInputKeyPress}
            />
            <Scrollbars style={{
                width: '100%',
                height: `${matches.length * 40}px`,
                maxHeight: '240px',
                display: matches.length > 0 ? 'flex' : 'none',
            }}>
                {
                    matches.map((option, index) => {
                        return (
                            <Option key={index} onClick={() => { handleOptionClick(option) }}>
                                {capitalize(option)}
                            </Option>
                        )
                    })
                }
            </Scrollbars>
        </Container>
    );
}

export default AutoComplete;
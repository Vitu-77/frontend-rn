import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { capitalize, ignoreAcentuation } from '../../util/stringHandler';
import {
    Container,
    Input,
    Option,
    AutoCompleteAction,
    ActionDescription,
    Image,
    Header,
} from './styles';

import searchIcon from '../../assets/icons/search.svg';
import closeSuggentionsIcon from '../../assets/icons/close-suggestions.svg';

const AutoComplete = (props) => {

    const [matches, setMatches] = useState([]);
    const [matchesIterator, setMatchesIterator] = useState(0);

    const [hoverSearch, setHoverSearch] = useState(false);
    const [hoverRemoveFilter, setHoverRemoverFilter] = useState(false);

    useEffect(() => {
        if (props.closeSuggestions) {
            setMatches([]);
            setMatchesIterator(0);
        }
    }, [props.closeSuggestions]);

    const handleOptionClick = (value) => {

        const autocompleteInput = document.querySelector('#autocomplete-input');

        autocompleteInput.value = capitalize(value);

        setMatches([]);
        setMatchesIterator(0);
        props.filter(value);
    }

    const handleInputChange = (e) => {
        setMatchesIterator(0);

        const filterParam = ignoreAcentuation(e.target.value)
            .trim()
            .toLowerCase();

        if (filterParam.length >= 3 && !matches.includes(filterParam)) {
            const matches = props.options.filter(word => {
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
            props.filter(currentValue);
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

    const handleInputAction = (type) => {

        const currentValue = document.querySelector('#autocomplete-input').value;

        if (type === 'search') {
            props.filter(currentValue);
            setMatches([]);
        }
        if (type === 'close') {
            props.removeFilter();
            document.querySelector('#autocomplete-input').value = '';
        }
    }

    return (
        <Container>
            <Header roundBottom={matches.length}>
                <Input
                    id='autocomplete-input'
                    placeholder={props.placeholder}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    onKeyDown={handleInputKeyPress}
                    autoComplete='off'
                    autoCorrect='off'
                    spellCheck='false'
                />
                <AutoCompleteAction
                    onClick={() => handleInputAction('search')}
                    onMouseOver={() => setHoverSearch(true)}
                    onMouseOut={() => setHoverSearch(false)}
                >
                    <ActionDescription hide={hoverSearch}>Buscar Município</ActionDescription>
                    <Image src={searchIcon} />
                </AutoCompleteAction>
                <AutoCompleteAction
                    hide={!props.isFilterng}
                    onClick={() => handleInputAction('close')}
                    onMouseOver={() => setHoverRemoverFilter(true)}
                    onMouseOut={() => setHoverRemoverFilter(false)}
                >
                    <ActionDescription hide={hoverRemoveFilter}>Remover Filro</ActionDescription>
                    <Image src={closeSuggentionsIcon} />
                </AutoCompleteAction>
            </Header>
            <Scrollbars style={{
                width: '100%',
                margin: '0',
                padding: '0',
                height: `${matches.length * 40}px`,
                maxHeight: '240px',
                display: matches.length > 0 ? 'flex' : 'none',
                flexDirection: 'column',
                borderRadius: '0 0 8px 8px',
                background: '#fff',
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
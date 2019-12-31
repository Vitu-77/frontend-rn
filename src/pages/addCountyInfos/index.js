import React, { useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from '../../components/header';
import Ancors from '../../components/ancors';
import InputField from '../../components/inputField';
import SelectField from '../../components/selectField';
import { capitalize } from '../../util/stringHandler';
import { countySizeOptions, microregionsOptions, municipalYears, federalYears } from '../../data/options';
import { PrimaryButton } from '../../components/button';
import { RemovableSmallItem, RemovableLargeItem } from '../../components/removableItem';

import {
    Main,
    ContentContainer,
    ContentHeader,
    Form,
    CountyName,
    Paragraph,
    SectionTitle,
    SubSectionTitle,
    MultipleItemsWrapper,
    SubGrid
} from './styles';

const NewCounty = () => {
    const { countyName } = useParams();

    const [councilors, setCouncilors] = useState([]);
    // const [newCouncilor, setNewCouncilor] = useState('');

    // const [votersPerSex, setVotersPerSex] = useState([]);
    // const [votersPerAge, setVotersPerAge] = useState([]);

    const [votersAmountMunicipal, setVotersAmountMunicipal] = useState([]);
    const [votersAmountFederal, setVotersAmountFederal] = useState([]);

    const handleAddCouncilor = (e) => {
        e.preventDefault();

        const newCouncilor = document.querySelector('#councilor').value;

        if (newCouncilor !== '') {
            document.querySelector('#councilor').value = null;
            setCouncilors([...councilors, newCouncilor]);
        }
    }

    const handleRemoveCouncilor = (index) => {
        const filterFunction = (councilor) => councilor !== councilors[index];
        const filteredCouncilors = councilors.filter(filterFunction);

        setCouncilors(filteredCouncilors);
    }

    const handleAddVoterr = (setter, state, ids) => {
        const year = document.querySelector(`#${ids[0]}`).innerText;
        const total = document.querySelector(`#${ids[1]}`).value;

        if (year && total) {
            const newObject = { year, total };

            setter([...state, newObject]);
            document.querySelector(`#${ids[1]}`).value = null;
        }
    }

    const handleRemoveVoters = (index, state, setter) => {
        const filterFunction = ({ total }) => total !== state[index].total;
        const filteredArray = state.filter(filterFunction);

        setter(filteredArray);
    }

    return (
        <Fragment>
            <Header />
            <Main>
                <ContentContainer>
                    <ContentHeader>
                        <Ancors ancors={[
                            { name: 'Início', href: '/' },
                            { name: capitalize(countyName), href: `/county/${countyName}` },
                            { name: 'Adicionar Informações', href: null },
                        ]} />
                        <CountyName>{capitalize(countyName)}</CountyName>
                        <Paragraph>
                            Adicione as informações referentes ao município de {capitalize(countyName)}. Cheque os <Link to='/tutorials'>tutoriais</Link> pra sanar qualquer dúvida
                            </Paragraph>
                    </ContentHeader>
                    <Form>
                        <SectionTitle>Dados Gerais</SectionTitle>
                        <InputField
                            enabled={false}
                            placeholder={capitalize(countyName)}
                            type='text'
                            label='Nome'
                        />
                        <InputField
                            placeholder='Apenas Números'
                            label='População'
                            type='number'
                        />
                        <SelectField
                            options={countySizeOptions}
                            label='Porte'
                            placeholder='Pequeno'
                            defaultValue={1}
                            handleChange={(e) => console.log(e.value)} //função de setState aqui
                        />
                        <SelectField
                            options={microregionsOptions}
                            label='Microregião'
                            placeholder='Mossoró'
                            defaultValue='Mossoró'
                            isSearchable
                            handleChange={(e) => console.log(e.value)} //função de setState aqui
                        />
                        <SectionTitle>Dados Políticos</SectionTitle>
                        <InputField
                            placeholder='Nome Completo'
                            label='Prefeito'
                            type='text'
                        />
                        <InputField
                            placeholder='Nome Completo'
                            label='Vice Prefeito'
                            type='text'
                        />
                        <InputField
                            placeholder='Apenas Números'
                            label='Eleitorado Total'
                            type='number'
                        />
                        <InputField
                            placeholder='Apenas o Ano'
                            label='Senso'
                            type='number'
                        />
                        <InputField
                            id='councilor'
                            span={3}
                            placeholder='Adicione Apenas um Vereador por Vez'
                            label='Vereador'
                            type='text'
                        />
                        <PrimaryButton
                            content='Adicionar Vereador'
                            padding='0 0'
                            span={1}
                            handleClick={handleAddCouncilor}
                        />
                        <MultipleItemsWrapper>
                            {councilors.map((councilor, index) => {
                                return <RemovableSmallItem
                                    key={councilor + Math.random()}
                                    content={councilor}
                                    handleClick={() => handleRemoveCouncilor(index)}
                                />
                            })}
                            <span>
                                {councilors.length === 0
                                    ? '* Para adicionar um vereador, digite seu nome no campo acima e em seguida clique no botão ao lado'
                                    : '* Para adicionar mais vereadores, repita o processo'}
                            </span>
                        </MultipleItemsWrapper>
                        <SubSectionTitle>Eleitorado por Sexo</SubSectionTitle>
                        <InputField
                            placeholder='Quantidade Total'
                            label='Sexo Masculino'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Sexo Feminino'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Não Informado'
                            type='number'
                        />
                        <InputField
                            placeholder='Apenas o Ano'
                            label='Senso'
                            type='number'
                        />
                        <SubSectionTitle>Eleitorado por Faixa Etária</SubSectionTitle>
                        <SubGrid span={4} columns={6}>
                            <InputField
                                placeholder='Quantidade Total'
                                label='16 - 19 anos'
                                type='number'
                            />
                            <InputField
                                placeholder='Quantidade Total'
                                label='20 - 29 anos'
                                type='number'
                            />
                            <InputField
                                placeholder='Quantidade Total'
                                label='30 - 39 anos'
                                type='number'
                            />
                            <InputField
                                placeholder='Quantidade Total'
                                label='40 - 49 anos'
                                type='number'
                            />
                            <InputField
                                placeholder='Quantidade Total'
                                label='50 - 59 anos'
                                type='number'
                            />
                            <InputField
                                placeholder='Quantidade Total'
                                label='60 ou mais'
                                type='number'
                            />
                        </SubGrid>
                        <SubSectionTitle>Eleitorado por Faixa Etária</SubSectionTitle>
                        <InputField
                            placeholder='Quantidade Total'
                            label='Analfabeto'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Fundamental Completo'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Fundamental Incompleto'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Médio Completo'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Médio Incompleto'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Superior Completo'
                            type='number'
                        />
                        <InputField
                            placeholder='Quantidade Total'
                            label='Superior Incompleto'
                            type='number'
                        />
                        <SubSectionTitle>Eleitorado nas ùltimas 5 Eleições Municipais</SubSectionTitle>
                        <SubGrid span={4} columns={3}>
                            <SelectField
                                id='municipal-year'
                                options={municipalYears}
                                label='Ano'
                                placeholder='2020'
                                defaultValue={2020}
                                handleChange={(e) => console.log(e.value)} //função de setState aqui
                            />
                            <InputField
                                id='municipal-total'
                                placeholder='Informe o Quantidade Referente ao Ano'
                                label='Quantidade Total'
                                type='number'
                            />
                            <PrimaryButton
                                content='Adicionar Registro'
                                padding='0 0'
                                handleClick={(e) => {
                                    e.preventDefault();

                                    return handleAddVoterr(
                                        setVotersAmountMunicipal,
                                        votersAmountMunicipal,
                                        ['municipal-year', 'municipal-total']
                                    );
                                }}
                            />
                        </SubGrid>
                        <MultipleItemsWrapper>
                            {votersAmountMunicipal.map((amount, index) => {
                                return <RemovableLargeItem
                                    key={amount.total + Math.random()}
                                    content={[
                                        ` Ano: ${amount.year}`,
                                        ` Quantidade: ${amount.total}`
                                    ]}
                                    handleClick={() => {
                                        return handleRemoveVoters(
                                            index,
                                            votersAmountMunicipal,
                                            setVotersAmountMunicipal
                                        );
                                    }}
                                />
                            })}
                            <span>
                                {councilors.length === 0
                                    ? '* Para adicionar um regisro, informe ano e quantidade nos campos acima e em seguida clique no botão ao lado'
                                    : '* Para adicionar mais registros, repita o processo'}
                            </span>
                        </MultipleItemsWrapper>
                        <SubSectionTitle>Eleitorado nas ùltimas 5 Eleições Federais</SubSectionTitle>
                        <SubGrid span={4} columns={3}>
                            <SelectField
                                id='federal-year'
                                options={federalYears}
                                label='Ano'
                                placeholder='2022'
                                defaultValue={2022}
                                handleChange={(e) => console.log(e.value)} //função de setState aqui
                            />
                            <InputField
                                id='federal-total'
                                placeholder='Informe o Quantidade Referente ao Ano'
                                label='Quantidade Total'
                                type='number'
                            />
                            <PrimaryButton
                                content='Adicionar Registro'
                                padding='0 0'
                                handleClick={(e) => {
                                    e.preventDefault();

                                    return handleAddVoterr(
                                        setVotersAmountFederal,
                                        votersAmountFederal,
                                        ['federal-year', 'federal-total']
                                    );
                                }}
                            />
                        </SubGrid>
                        <MultipleItemsWrapper>
                            {votersAmountFederal.map((amount, index) => {
                                return <RemovableLargeItem
                                    key={amount.total + Math.random()}
                                    content={[
                                        ` Ano: ${amount.year}`,
                                        ` Quantidade: ${amount.total}`
                                    ]}
                                    handleClick={() => {
                                        return handleRemoveVoters(
                                            index,
                                            votersAmountFederal,
                                            setVotersAmountFederal
                                        );
                                    }}
                                />
                            })}
                            <span>
                                {councilors.length === 0
                                    ? '* Para adicionar um regisro, informe ano e quantidade nos campos acima e em seguida clique no botão ao lado'
                                    : '* Para adicionar mais registros, repita o processo'}
                            </span>
                        </MultipleItemsWrapper>
                    </Form>
                </ContentContainer>
            </Main>
        </Fragment >
    )
}

export default NewCounty;
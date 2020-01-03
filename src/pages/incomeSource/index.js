import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Ancors from '../../components/ancors';
import { capitalize } from '../../util/stringHandler';
import {
    Main,
    ContentContainer,
    ContentHeader,
    IncomeSourceName,
    KeyVal,
    Key,
    Value,
    ContentBody,
    SectionRow,
    IncomeSourceDescription
} from './styles';

const IncomeSource = () => {

    const { county_name/*, incomeSourceID */} = useParams();

    return (
        <React.Fragment>
            <Header />
            <Main>
                <ContentContainer>
                    <ContentHeader>
                        <Ancors ancors={[
                            { name: 'Início', href: '/' },
                            { name: capitalize(county_name), href: `/county/${county_name}` },
                            { name: 'Fontes de Renda (Turismo)', href: null },
                        ]} />
                        <IncomeSourceName>Turismo</IncomeSourceName> {/* buscar nome do back */}
                    </ContentHeader>
                    <ContentBody>
                        <SectionRow>
                            <IncomeSourceDescription>
                                <h4>Descrição do Setor</h4>
                                <p>Natal é a capital do estado de Rio Grande do Norte, na extremidade nordeste do Brasil. É conhecida pelas extensas dunas de areia costeiras e pelo Forte dos Reis Magos, em forma de estrela, uma fortaleza portuguesa do século XVI na foz do rio Potengi.</p>
                            </IncomeSourceDescription>
                        </SectionRow>
                        <SectionRow>
                            <KeyVal>
                                <Key>Renda total gerada por esse setor</Key>
                                <Value>-- API --</Value>
                            </KeyVal>
                            <KeyVal>
                                <Key>Faixa Etária Média dos Empregados Nesse Setor</Key>
                                <Value>-- API --</Value>
                            </KeyVal>
                        </SectionRow>
                        <SectionRow>
                            <KeyVal>
                                <Key>Empregos diretos gerados por esse setor</Key>
                                <Value>-- API --</Value>
                            </KeyVal>
                            <KeyVal>
                                <Key>Empregos indiretos gerados por esse setor</Key>
                                <Value>-- API --</Value>
                            </KeyVal>
                        </SectionRow>
                    </ContentBody>
                </ContentContainer>
            </Main>
        </React.Fragment>
    )
}

export default IncomeSource;
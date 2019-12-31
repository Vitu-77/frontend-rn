/* React Components */
import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
/*Lib */
import Head from '../../lib/head';
import Suspense from '../../lib/suspense';
/* Components */
import Header from '../../components/header';
import Ancors from '../../components/ancors';
import CountyName from '../../components/countyName';
import TabsNavigation from '../../components/tabs';
import { PrimaryButton } from '../../components/button';
import SplashScreen from '../../components/splashScreen'
import EmptyInfoScreen from '../../components/emptyInfoScreen';
/* Services */
import { getCountyInfos } from '../../services/api';
/* Config/Global */
import theme from '../../global/styles/theme';
/* Styled Components */
import { PoliticSection, EconomicSection, CulturalSection } from '../../components/countySections';
/* Util */
import { capitalize, toRequestFormat } from '../../util/stringHandler';
/* Styled Components */
import {
    Main,
    ContentContainer,
    ContainerHeader,
    HeaderRow,
    GeneralInfos,
    GeneralInfo,
    ContainerBody
} from './styles';

const County = () => {

    const { countyName } = useParams();
    const [countyData, setCountyData] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await getCountyInfos(toRequestFormat(countyName));
            await setCountyData(data);
        }

        setTimeout(() => {
            fetch();
        }, 1000);
    }, [countyName, setCountyData]);

    return (
        <Fragment>
            <Head title={capitalize(`Nome do Sistema | ${countyName}`)} description='Descrição de Natal' />
            <Header />
            <Main>
                <Suspense
                    fallback={<EmptyInfoScreen />}
                    wait={<SplashScreen />}
                    resource={countyData}
                >
                    <ContentContainer>
                        <ContainerHeader>
                            <Ancors ancors={[
                                { name: 'Início', href: '/' },
                                { name: countyData?.general?.countyName, href: null },
                            ]} />
                            <HeaderRow>
                                <CountyName
                                    countyName={countyData?.general?.countyName}
                                    isCapital={countyData?.general?.isStateCapital}
                                />
                                <PrimaryButton content='Editar Município' handleClick={() => {
                                    console.log(countyData);
                                }} />
                            </HeaderRow>
                            <HeaderRow>
                                <GeneralInfos>
                                    <GeneralInfo>
                                        <span>População</span>
                                        <span>{countyData?.general?.population}</span>
                                    </GeneralInfo>
                                    <GeneralInfo>
                                        <span>Porte</span>
                                        <span>{
                                            countyData?.general?.countySize === 1
                                                ? 'Pequeno' : countyData?.general?.countySize === 2
                                                    ? 'Médio' : 'Grande'
                                        }</span>
                                    </GeneralInfo>
                                    <GeneralInfo>
                                        <span>Microregião</span>
                                        <span>{countyData?.general?.microRegion}</span>
                                    </GeneralInfo>
                                </GeneralInfos>
                            </HeaderRow>
                        </ContainerHeader>
                        <ContainerBody>
                            <TabsNavigation
                                styles={{
                                    indicatorTransition: '500ms',
                                    indicatorColor: theme.secondarySystemColor,
                                    indicatorHeight: 3,
                                    gap: '0 0 5px 0',
                                    tabColor: theme.secondaryGrey,
                                    tabPadding: '5px 20px',
                                    tabHoverColor: theme.secondarySystemColor,
                                    tabTransition: '300ms',
                                    fontSize: '21px',
                                    fontWeight: 400,
                                    activeTabFontWeight: 500,
                                    activeTabColor: theme.secondarySystemColor,
                                }}
                                tabs={[
                                    'Dados Políticos',
                                    'Dados Econômicos',
                                    'Dados Culturais'
                                ]}
                                panels={[
                                    <PoliticSection data={countyData?.political} />,
                                    <EconomicSection data={countyData?.economy} />,
                                    <CulturalSection data={countyData?.cultural} />
                                ]}
                            />
                        </ContainerBody>
                    </ContentContainer>
                </Suspense>
            </Main>
        </Fragment>
    )
}

export default County;
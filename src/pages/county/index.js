import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getCountyInfos } from '../../services/api';
import Header from '../../components/header/index';
import Ancors from '../../components/ancors/index';
import CountyName from '../../components/countyName/index';
import { PrimaryButton } from '../../components/button/index';
import TabsNavigation from '../../components/tabs/index';
import { PoliticSection, EconomicSection } from '../../components/countySections/index';
import Suspense from '../../components/suspense/index';
import Loading from '../../assets/loading.svg';

import theme from '../../global/styles/theme';

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
    const [countyData, setCountyData] = useState();

    useEffect(() => {
        const fetch = async () => {
            const { data } = await getCountyInfos(countyName);
            await setCountyData(data);
        }

        setTimeout(() => {
            fetch();
        }, 1000);
    }, [countyName, setCountyData]);

    return (
        <Fragment>
            <Header />
            <Main>
                <Suspense
                    fallback={<img src={Loading} alt='loading...' />}
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
                                    <EconomicSection data={countyData?.economic} />,
                                    'Cultural'
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
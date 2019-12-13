import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getCountyInfos } from '../../services/api';
import Header from '../../components/header/index';
import Ancors from '../../components/ancors/index';
import CountyName from '../../components/countyName/index';
import { PrimaryButton } from '../../components/button/index';
import TabsNavigation from '../../components/tabs/index';
import { PoliticSection } from '../../components/countySections/index';

import theme from '../../global/styles/Theme';

// import PizzaChart from '../../components/pizzaChart/index';
// import BarChart from '../../components/barChart/index';
// import ChartsWrapper from './styles';
// import Suspense from '../../components/suspense/index';
// import Loading from '../../assets/loading.svg';
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

        fetch();
    }, [countyName, setCountyData]);
    
    console.log(countyData);
    
    return (
        <Fragment>
            <Header />
            <Main>
                <ContentContainer>
                    <ContainerHeader>
                        <Ancors ancors={[
                            { name: 'Início', href: '/' },
                            { name: 'Natal', href: null }, //substituir pelo nome do municipio 
                        ]} />
                        <HeaderRow>
                            <CountyName countyName='Rafael Godeiro' isCapital={true} />
                            <PrimaryButton content='Editar Município' />
                        </HeaderRow>
                        <HeaderRow>
                            <GeneralInfos>
                                <GeneralInfo>
                                    <span>População</span>
                                    <span>5.479</span>
                                </GeneralInfo>
                                <GeneralInfo>
                                    <span>Porte</span>
                                    <span>Pequeno</span>
                                </GeneralInfo>
                                <GeneralInfo>
                                    <span>Microregião</span>
                                    <span>Umarizal</span>
                                </GeneralInfo>
                            </GeneralInfos>
                        </HeaderRow>
                    </ContainerHeader>
                    <ContainerBody>
                        <TabsNavigation
                            styles={{
                                indicatorTransition: '500ms',
                                indicatorColor: theme.primarySystemColor,
                                indicatorHeight: 3,
                                gap: '0 0 5px 0',
                                tabColor: theme.secondaryGrey,
                                tabPadding: '5px 20px',
                                tabHoverColor: theme.primaryGrey,
                                tabTransition: '300ms',
                                fontSize: '21px',
                                fontWeight: 400,
                                activeTabFontWeight: 500,
                                activeTabColor: theme.primarySystemColor,
                            }}
                            tabs={[
                                'Dados Políticos',
                                'Dados Econômicos',
                                'Dados Culturais'
                            ]}
                            panels={[
                                <PoliticSection />,
                                'Econômico',
                                'Cultural'
                            ]}
                        />
                    </ContainerBody>
                </ContentContainer>
            </Main>
        </Fragment>
    )
}

export default County;
    // <Suspense fallback={<img src={Loading} />} resource={countyData}>
    //     <ChartsWrapper>
    //         <BarChart data={countyData?.general?.chartData} />
    //         <PizzaChart data={countyData?.general?.chartData} scale={360} />
    //     </ChartsWrapper>
    // </Suspense>
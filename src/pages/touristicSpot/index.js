import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Ancors from '../../components/ancors';
import { capitalize } from '../../util/stringHandler';
import { getTouristicSpot } from '../../services/api';
import SplashScreen from '../../components/splashScreen';
import Suspense from '../../lib/suspense';
import {
    Main,
    ContentContainer,
    ContentHeader,
    TouristicSpotName,
    KeyVal,
    Key,
    Value,
    ContentBody,
    SectionRow,
    TouristicSpotDescription
} from './styles';

const TouristicSpot = () => {

    const { county_name, touristic_spot_id } = useParams();

    const [touristicSpot, setTouristicSpot] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await getTouristicSpot(touristic_spot_id);
            setTouristicSpot(data.touristicSpot);
        }

        setTimeout(() => fetch(), 500);
    }, [touristic_spot_id]);

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Suspense
                    fallback={<h1>Erro</h1>} // melhorar isso
                    wait={<SplashScreen />}
                    resource={touristicSpot}
                >
                    <ContentContainer>
                        <ContentHeader>
                            <Ancors ancors={[
                                { name: 'Início', href: '/' },
                                { name: capitalize(county_name), href: `/county/${county_name}` },
                                { name: `Pontos Turísticos (${touristicSpot?.name})`, href: null },
                            ]} />
                            <TouristicSpotName>{touristicSpot?.name}</TouristicSpotName>
                        </ContentHeader>
                        <ContentBody>
                            <SectionRow>
                                <TouristicSpotDescription>
                                    <h4>Conheça Melhor o Local</h4>
                                    <p>{touristicSpot?.description}</p>
                                </TouristicSpotDescription>
                            </SectionRow>
                            <SectionRow>
                                <KeyVal>
                                    <Key>Endereço</Key>
                                    <Value>{touristicSpot?.adress}</Value>
                                </KeyVal>
                            </SectionRow>
                        </ContentBody>
                    </ContentContainer>
                </Suspense>
            </Main>
        </React.Fragment>
    )

}

export default TouristicSpot;
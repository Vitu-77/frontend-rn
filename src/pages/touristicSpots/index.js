import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Ancors from '../../components/ancors';
import { capitalize } from '../../util/stringHandler';
import { RemovableLargeItem } from '../../components/removableItem';
import SplashScreen from '../../components/splashScreen';
import Suspense from '../../lib/suspense';
import { getTouristicSpots, postTouristicSpot } from '../../services/api';
import { SecondaryButton, PrimaryButton } from '../../components/button';
import InputField from '../../components/inputField';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {
    Main,
    ContentContainer,
    ContentHeader,
    HeaderTitle,
    ContentBody,
    Grid,
    NewEntryForm,
    Form,
    ButtonsRow
} from './styles';

const TouristicSpots = () => {

    const { county_name } = useParams();

    const [touristicSpots, setTouristicSpots] = useState(null);
    const [countyId] = useState(1);  // isso deve ser armazenado no context de County

    const [showForm, setShowForm] = useState(false);

    const handleAddTouristicSpot = async () => {
        const newTouristicSpot = {
            name: document.querySelector('#new-name').value,
            adress: document.querySelector('#new-adress').value,
            description: document.querySelector('#new-description').value,
        }

        setTouristicSpots([...touristicSpots, newTouristicSpot]);
        setShowForm(false);
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        const requestArray = [newTouristicSpot];

        return await postTouristicSpot(countyId, requestArray);
    }

    useEffect(() => {
        const fetch = async () => {
            const { data } = await getTouristicSpots(countyId);
            setTouristicSpots(data.touristicSpots);
        }

        fetch();

    }, [countyId]);

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Suspense
                    fallback={<h1>Erro</h1>}
                    wait={<SplashScreen />}
                    resource={touristicSpots}
                >
                    <ContentContainer>
                        <ContentHeader>
                            <Ancors ancors={[
                                { name: 'Início', href: '/' },
                                { name: capitalize(county_name), href: `/county/${county_name}` },
                                { name: 'Pontos Turísticos', href: null },
                            ]} />
                            <HeaderTitle>Pontos Turísticos</HeaderTitle>
                        </ContentHeader>
                        <ContentBody>
                            <TransitionGroup appear={false} enter={true} exit={true}>
                                <Grid>
                                    <span>{`Todos os pontos turísticos de ${capitalize(county_name)}`}</span>
                                    {touristicSpots?.map((touristicSpot) => (
                                        <Fade key={touristicSpot.name} collapse>
                                            <RemovableLargeItem
                                                isLink={true}
                                                href={`/county/${county_name}/touristic_spots/${touristicSpot.id}`} // tornar dinamico
                                                content={[
                                                    touristicSpot.name,
                                                    touristicSpot.adress
                                                ]}
                                            />
                                        </Fade>
                                    ))}
                                </Grid>
                            </TransitionGroup>
                            <Grid>
                                <NewEntryForm showForm={showForm}>
                                    <Form showForm={showForm}>
                                        <InputField
                                            id='new-name'
                                            label='Nome'
                                        />
                                        <InputField
                                            id='new-adress'
                                            label='Endereço'
                                        />
                                        <InputField
                                            span={2}
                                            id='new-description'
                                            label='Descrição'
                                        />
                                    </Form>
                                    <ButtonsRow showForm={showForm}>
                                        {
                                            showForm
                                                ? <Fade>
                                                    <PrimaryButton
                                                        type='button'
                                                        content='Salvar'
                                                        padding='10px 0'
                                                        style={{ marginRight: '10px', width: '200px' }}
                                                        handleClick={handleAddTouristicSpot}
                                                    />
                                                    <SecondaryButton
                                                        type='button'
                                                        content='Fechar'
                                                        padding='10px 0'
                                                        style={{ width: '200px' }}
                                                        handleClick={() => setShowForm(false)}
                                                    />
                                                </Fade>
                                                : <Fade>
                                                    <PrimaryButton
                                                        type='button'
                                                        content='Adicionar'
                                                        padding='10px 0'
                                                        style={{ width: '200px' }}
                                                        handleClick={() => setShowForm(true)}
                                                    />
                                                </Fade>
                                        }
                                    </ButtonsRow>
                                </NewEntryForm>
                            </Grid>
                        </ContentBody>
                    </ContentContainer>
                </Suspense>
            </Main>
        </React.Fragment>
    )
}

export default TouristicSpots;
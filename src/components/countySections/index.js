import React from 'react';

import {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    MayorWrapper,
    CouncilorWrapper,
    Councilor
} from './styles';

const PoliticSection = (props) => {
    return (
        <SectionWrapper>
            <SubSectionTitle>Comissão Política do Município</SubSectionTitle>
            <SectionRow>
                <MayorWrapper>
                    <h3>Atual Prefeito</h3>
                    <span>Prefeito</span>
                </MayorWrapper>
                <MayorWrapper>
                    <h3>Vice Prefeito</h3>
                    <span>Vice Prefeito</span>
                </MayorWrapper>
            </SectionRow>
            <SectionRow>
                <CouncilorWrapper>
                    <span>Vereadores</span>
                    <Councilor>Victor Silva</Councilor>
                    <Councilor>Vanderlei de Souva Abreu</Councilor>
                    <Councilor>Camargo de Lacerda</Councilor>
                    <Councilor>Bobril da silva</Councilor>
                    <Councilor>Joaquin pedeira dos Santos</Councilor>
                    <Councilor>Hugo de lacate</Councilor>
                    <Councilor>Pano de chão</Councilor>
                    <Councilor>Arrox mascavo de Soáres</Councilor>
                    <Councilor>Pitchbila das dores</Councilor>
                    <Councilor>Amélia minha avó</Councilor>
                    <Councilor>Bisavó na verdade</Councilor>
                    <Councilor>Cachorro de mederios</Councilor>
                    <Councilor>Vanderlei de Souva Abreu</Councilor>
                </CouncilorWrapper>
            </SectionRow>
            <SubSectionTitle>Eleitorado do Município</SubSectionTitle>
        </SectionWrapper>
    )
}

export { PoliticSection }
import React from 'react';
import { Container, ContainerContent, LeftStateText, StateTitleText, RightTextsContainer, LeftContainer, RightContainer, RightSmallText, RightText } from './styles';
import { formatToDecimal } from '../../utils/formatToDecimalNumber';

interface CrowdCardProps {
    uf: string;
    state: string;
    cases: number;
    deaths: number;
}

const CrowdCard: React.FC<CrowdCardProps> = ({ uf, state, cases, deaths }) => {
    return(
        <Container>
            <ContainerContent>
                <LeftContainer>
                    <StateTitleText>{uf}</StateTitleText>
                    <LeftStateText>Estado: {state}</LeftStateText>
                </LeftContainer>
                <RightContainer>
                    <RightTextsContainer>
                        <RightSmallText>Casos:</RightSmallText>
                        <RightText>{formatToDecimal(cases)}</RightText>
                    </RightTextsContainer>
                    <RightTextsContainer last>
                        <RightSmallText>Óbtos:</RightSmallText>
                        <RightText>{formatToDecimal(deaths)}</RightText>
                    </RightTextsContainer>
                </RightContainer>
            </ContainerContent>
        </Container>
    );
}

export default CrowdCard;
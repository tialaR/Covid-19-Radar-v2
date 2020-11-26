import React from 'react';
import { Container, ContainerContent, Decorator, StateTitleText, RightTextsContainer, LeftContainer, RightContainer, RightSmallText, RightText } from './styles';

interface CrowdCardProps {
    uf: string;
    cases: number;
    deaths: number;
}

const CrowdCard: React.FC<CrowdCardProps> = ({ uf, cases, deaths }) => {
    return(
        <Container>
            <ContainerContent>
                <LeftContainer>
                    <StateTitleText>{uf}</StateTitleText>
                </LeftContainer>
                <RightContainer>
                    <RightTextsContainer>
                        <RightSmallText>Casos:</RightSmallText>
                        <RightText>{cases}</RightText>
                    </RightTextsContainer>
                    <RightTextsContainer last>
                        <RightSmallText>Óbtos:</RightSmallText>
                        <RightText>{deaths}</RightText>
                    </RightTextsContainer>
                </RightContainer>
            </ContainerContent>
        </Container>
    );
}

export default CrowdCard;
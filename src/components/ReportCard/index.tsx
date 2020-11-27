import React from 'react';
import { Container, ContainerContent, Decorator, StateTitleText, LeftTextsContainer, LeftTextsContainerDate, LeftSmallText, RightTextsContainer, LeftContainer, RightContainer, RightSmallText, RightText, LeftText, LeftStateText } from './styles';
import { formatToDecimal } from '../../utils/formatToDecimalNumber';

interface ReportCardProps {
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    date: string;
    hour: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ uf, state, cases, deaths, suspects, date, hour }) => {
    return(
        <Container>
            <Decorator />
            <ContainerContent>
                <LeftContainer>
                    <StateTitleText>{uf}</StateTitleText>
                    <LeftStateText>Estado: {state}</LeftStateText>
                    <LeftTextsContainer>
                        <LeftTextsContainerDate>
                            <LeftSmallText>Data:</LeftSmallText>
                            <LeftText>{date}</LeftText>
                        </LeftTextsContainerDate>
                        <LeftTextsContainerDate>
                            <LeftSmallText>Hora:</LeftSmallText>
                            <LeftText>{hour}</LeftText>
                        </LeftTextsContainerDate>
                    </LeftTextsContainer>
                </LeftContainer>
                <RightContainer>
                    <RightTextsContainer>
                        <RightSmallText>Casos:</RightSmallText>
                        <RightText>{formatToDecimal(cases)}</RightText>
                    </RightTextsContainer>
                    <RightTextsContainer>
                        <RightSmallText>Óbtos:</RightSmallText>
                        <RightText>{formatToDecimal(deaths)}</RightText>
                    </RightTextsContainer>
                    <RightTextsContainer last>
                        <RightSmallText>Suspeitas:</RightSmallText>
                        <RightText>{formatToDecimal(suspects)}</RightText>
                    </RightTextsContainer>
                </RightContainer>
            </ContainerContent>
        </Container>
    );
}

export default ReportCard;
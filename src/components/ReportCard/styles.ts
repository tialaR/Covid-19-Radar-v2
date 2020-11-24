import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface RightTextsContainerProps {
    last?: boolean;
}

export const Container = styled.View`
    background-color: ${colors.surface};
    border-radius: 10px;
    margin: 0 24px 20px 24px;
    flex-direction: row;
    overflow: hidden;
    box-shadow: 0px 10px 14px ${colors.shadow};
    elevation: 2;
`;

export const ContainerContent = styled.View`
    padding: 14px 30px;
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

export const Decorator = styled.View`
  background-color: ${colors.primary};
  width: 8px;
`;

export const LeftContainer = styled.View`
    padding-right: 20px;
    flex: 1;
`;

export const StateTitleText = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: ${colors.primary};
`;

export const LeftStateText = styled.Text`
    font-size: 10px;
    color: ${colors.white};
    padding-bottom: 12px;
`;

export const LeftTextsContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LeftText = styled.Text`
    font-size: 14px;
    color: ${colors.white};
    padding-bottom: 4px;
`;

export const LeftTextsContainerDate = styled.View`
    margin-right: 18px;
`;

export const LeftSmallText = styled.Text`
    font-size: 10px;
    color: ${colors.white};
    padding-bottom: 2px;
`;

export const DateText = styled.Text`
    font-size: 14px;
    color: ${colors.white};
`;


export const RightContainer = styled.View`
    justify-content: space-between;
`;

export const RightTextsContainer = styled.View<RightTextsContainerProps>`
    padding-bottom: ${props => props.last ? 0 : 8}px;
`;

export const RightSmallText = styled.Text`
    font-size: 10px;
    color: ${colors.white};
    padding-bottom: 2px;
`;

export const RightText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: ${colors.white};
`;

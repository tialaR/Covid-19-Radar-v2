import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface RadioContainerProps {
    status: 'checked' | 'unchecked';
    first?: boolean;
    selectDefault?: boolean;
}

export const Container = styled.View`
    padding: 20px 0;
    flex-direction: row;
    align-items: center;
`;

export const RadioContainer = styled.TouchableOpacity<RadioContainerProps>`
    padding: 6px 15px;
    border-radius: 10px;
    margin-right:  ${props => props.first ? 14 : 0}px;
    background-color: ${
        props => props.status === 'checked' ? colors.primary : colors.surface
    };
`;

export const RadioText = styled.Text<RadioContainerProps>`
    font-size: 14px;
    color: ${props => props.status === 'checked' ? colors.white : colors.whiteLight};
`;

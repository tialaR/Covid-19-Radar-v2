import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
    justify-content: center;
    margin-top: -70px;
    align-items: center;
    padding: 0 40px;
    background-color: ${colors.background};
    flex: 1;
`;

export const ErrorMessageText = styled.Text`
    color: ${colors.white};
    padding-top: 40px;
`;

export const TryAgain = styled.TouchableOpacity`
    padding-top: 10px;
`;

export const TryAgainText = styled.Text`
    color: ${colors.primary};
`;


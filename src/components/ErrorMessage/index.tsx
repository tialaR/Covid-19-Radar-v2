import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import { Container, ErrorMessageText, TryAgain, TryAgainText } from './styles';

interface ErrorMessageProps {
    onTryAgainPress: () => void;
    errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ onTryAgainPress, errorMessage }) => {
    return(
        <Container>
            <Icon name='report-problem' color={colors.primary} size={80} />
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
            <TryAgain onPress={onTryAgainPress}>
                <TryAgainText>Tentar novamente?</TryAgainText>
            </TryAgain>
        </Container>
    );
}

export default ErrorMessage;
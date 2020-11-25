import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled, { css } from 'styled-components/native';
import { colors } from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: ${colors.surface};
  border-radius: 10px;
  margin-bottom: ${props => (props.isErrored ? 0 : 8)}px;
  border-width: 1px;
  border-color: ${colors.surface};
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.gray};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.white};
  font-size: 13px;
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 16px;
`;

export const ErrorMessage = styled.Text`
  color: ${colors.gray};
  font-size: 12px;
  padding: 4px 0 8px 8px;
`;
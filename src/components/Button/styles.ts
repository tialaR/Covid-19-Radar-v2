import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  height: 54px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 17px;
`;

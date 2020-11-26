import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');
const modalWidth = width - 80;

export const Overlay = styled.View`
  position: absolute;
  background-color: ${colors.whiteLight};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
`;

export const OutsideAreaButton = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const InformationContainer = styled.View`
  padding: 40px 24px;
  width: ${modalWidth}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.surface};
  border-radius: 10px;
  box-shadow: 0px 10px 14px ${colors.shadow};
  elevation: 4;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.tertiary};
  text-align: center;
  padding-top: 20px;
`;

export const Information = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
  padding-top: 20px;
`;

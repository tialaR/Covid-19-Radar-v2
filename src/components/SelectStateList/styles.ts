import { Dimensions, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface SelectTextProps {
  opaque?: boolean;
}

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px; 
  padding: 0 16px;
  margin-top: 9px;
  background-color: ${colors.surface};
  border-radius: 10px;
`;

export const SelectText = styled.Text<SelectTextProps>`
  color: ${props => props.opaque ? colors.whiteLight : colors.white};
  font-size: 14px;
  margin-left: 16px;
`;

export const SelectItemList = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 12px 24px;
`;

export const ModalContainer = styled.View`
  border-radius: 8px;
  background-color: ${colors.surface};
  box-shadow: 0px 10px 14px ${colors.shadow};
  elevation: 4;
  position: absolute;
  height: 300px;
  padding-bottom: 20px;
`;

export const ModalBackgroundScreen = styled.View`
  background-color: transparent;
  flex: 1;
`;

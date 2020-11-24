import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface ChartTitleProps {
  first: boolean;
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 40 },
})`
  flex-grow: 1;
  background-color: ${colors.background};
`;

export const ChartTitle = styled.Text<ChartTitleProps>`
  font-size: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  margin-top: ${props => props.first ? 20 : 40}px;
  color: ${colors.white};
`;

export const ChartTitleTwo = styled.Text`
  font-size: 23px;
  font-weight: 700;
  padding-left: 20px;
  padding-bottom: 10px;
  color: ${colors.gray};
`;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StateReportCrowd } from './index';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background}
`;

export const StatesReportList = styled(
  FlatList as new () => FlatList<StateReportCrowd>,
).attrs({
  contentContainerStyle: { paddingBottom: 40 },
})`
  padding: 40px 0 32px;
`;
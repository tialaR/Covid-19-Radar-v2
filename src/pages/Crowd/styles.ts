import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 60 },
})`
    flex-grow: 1;
    background-color: ${colors.background};
    padding: 20px 32px;
`;

export const ContainerRowSelects = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SelectStateListAux = styled.View`
    flex: 1;
    padding-right: 14px;
`;

export const StatesReportList = styled.View``;

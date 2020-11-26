import React, { useContext } from 'react';
import CrowdCard from '../../components/CrowdCard';
import { ReportContext } from '../../ReportContext';
import { Container, StatesReportList } from './styles';
import SectionTitle from '../../components/SectionTitle';

export interface StateReport {
    uf: string;
    cases: number;
    deaths: number;
}

const CrowdList: React.FC = () => {
    const reportContext = useContext(ReportContext);

    return(
        <Container>
            <StatesReportList
                data={reportContext.reports}
                keyExtractor={stateReport => String(stateReport.uid)}
                ListHeaderComponent={(
                    <SectionTitle
                      title="Lista dos estados do crowd"
                      sectionTitleStyles={{ marginLeft: 24 }}
                    />
                )}
                renderItem={({ item: stateReport }) => (
                    <CrowdCard 
                        uf={stateReport.uf}
                        cases={stateReport.cases}
                        deaths={stateReport.deaths}
                    />
                )}
            />
        </Container>
    );
}

export default CrowdList;
import React, { useContext } from 'react';
import CrowdCard from '../../components/CrowdCard';
import { ReportContext } from '../../ReportContext';
import { Container, StatesReportList } from './styles';
import SectionTitle from '../../components/SectionTitle';

export interface StateReportCrowd {
    state: string;
    UF: string;
    cases: number;
    death: number;
  }

const CrowdList: React.FC = () => {
    const reportContext = useContext(ReportContext);

    return(
        <Container>
            <StatesReportList
                data={reportContext.reportsCrowd}
                keyExtractor={stateReport => String(stateReport.state)}
                ListHeaderComponent={(
                    <SectionTitle
                      title={"Lista dos estados do crowd"}
                      sectionTitleStyles={{ marginLeft: 24 }}
                    />
                )}
                renderItem={({ item: stateReport }) => (
                    <CrowdCard 
                        uf={stateReport.UF}
                        state={stateReport.state}
                        cases={stateReport.cases}
                        deaths={stateReport.death}
                    />
                )}
            />
        </Container>
    );
}

export default CrowdList;
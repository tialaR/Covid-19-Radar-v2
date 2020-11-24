import React, { useCallback, useContext } from 'react';
import ReportCard from '../../components/ReportCard';
import { parseISO, format } from 'date-fns';
import { ReportContext } from '../../ReportContext';
import { Container, StatesReportList } from './styles';

export interface StateReport {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
}

const Dashboard: React.FC = () => {
    const reportContext = useContext(ReportContext);

    const formatDate = useCallback((date: string) => {
        const dateISO = parseISO(date);
        const formattedDate = format(dateISO, "dd/MM/yyyy");
        const formattedHour = format(dateISO, "HH:mm");

        const formattedValues = { formattedDate, formattedHour };

        return formattedValues;
    }, []);

    return(
        <Container>
            <StatesReportList
                data={reportContext.reports}
                keyExtractor={stateReport => String(stateReport.uid)}
                renderItem={({ item: stateReport }) => (
                    <ReportCard 
                        uf={stateReport.uf}
                        state={stateReport.state}
                        cases={stateReport.cases}
                        deaths={stateReport.deaths}
                        suspects={stateReport.suspects}
                        refuses={stateReport.refuses}
                        date={formatDate(stateReport.datetime).formattedDate}
                        hour={formatDate(stateReport.datetime).formattedHour}
                    />
                )}
            />
        </Container>
    );
}

export default Dashboard;
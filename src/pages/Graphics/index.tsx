import React, { useContext, useCallback } from 'react';
import LineChart from '../../components/LineChart';
import { Container, ChartTitle, ChartTitleTwo } from './styles';
import { parseISO, format } from 'date-fns';
import { ReportContext } from '../../ReportContext';

const Graphics: React.FC = () => {
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
            <ChartTitle first>Casos - <ChartTitleTwo>{formatDate(reportContext.currentDate).formattedDate}</ChartTitleTwo></ChartTitle>
            <LineChart 
                chartList={reportContext.cases} 
                bottomList={reportContext.ufs} 
            />

            <ChartTitle>Óbitos - <ChartTitleTwo>{formatDate(reportContext.currentDate).formattedDate}</ChartTitleTwo></ChartTitle>
            <LineChart 
                chartList={reportContext.deaths} 
                bottomList={reportContext.ufs} 
            />

            <ChartTitle>Suspeitas - <ChartTitleTwo>{formatDate(reportContext.currentDate).formattedDate}</ChartTitleTwo></ChartTitle>
            <LineChart 
                chartList={reportContext.suspects} 
                bottomList={reportContext.ufs} 
            />
        </Container>
    );
}

export default Graphics;
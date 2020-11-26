import React, { useState, useCallback } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { colors } from "../../styles/colors";
import { Container } from "./styles";
import { getCurrentDate } from '../../utils/getCurrentDate';

//Calendar
LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dec"
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Treça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = "fr";

interface SelectedDate {
    year: string;
    month: number;
    day: number;
    timestamp: number;
    dateString: string;
}

interface SelectDateProps {
    onSelectDate: (date: string) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({ onSelectDate }) => {
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    const handleSelectDate = useCallback((date: string) => {
        setSelectedDate(date);
    }, [setSelectedDate]);

    return(
        <Container>
            <Calendar 
                // Initially visible month. Default = Date()
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2019-10-01'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={getCurrentDate()}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day: SelectedDate) => {
                    handleSelectDate(day.dateString);
                    onSelectDate(day.dateString);
                }}
                markedDates={{
                    [selectedDate]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedColor: colors.primary,
                      selectedTextColor: colors.white,
                    },
                }}
                style={{ backgroundColor: colors.surface, borderRadius: 10 }}
                theme={{
                    backgroundColor: colors.surface,
                    calendarBackground: colors.surface,
                    textSectionTitleColor: colors.white,
                    textSectionTitleDisabledColor: colors.whiteLight,
                    selectedDayBackgroundColor: colors.primary,
                    selectedDayTextColor: colors.white,
                    dayTextColor: colors.whiteLight,
                    textDisabledColor: colors.whiteLight,
                    arrowColor: colors.white,
                    todayTextColor: colors.whiteLight,
                    disabledArrowColor: colors.whiteLight,
                    monthTextColor: colors.white,
                    indicatorColor: colors.white,
                    textDayFontSize: 14,
                    textMonthFontSize: 12,
                    textDayHeaderFontSize: 14
                }}                
            />
        </Container>
    );
}

export default SelectDate;
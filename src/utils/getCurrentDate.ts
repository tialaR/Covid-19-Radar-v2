import { format } from 'date-fns';
import pt from 'date-fns/locales/pt';

export const getCurrentDate = () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    return today;
}

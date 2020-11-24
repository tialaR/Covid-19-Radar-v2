import { createContext } from 'react';

interface StateReport {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
}

interface ContextReport {
    reports: Array<StateReport>;
    ufs: Array<String>;
    cases: Array<Number>;
    deaths: Array<Number>;
    suspects: Array<Number>;
    currentDate: string;
}

export const ReportContext = createContext({} as ContextReport);

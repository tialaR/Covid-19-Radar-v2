import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useCallback, useState } from 'react';
import { ReportContext } from '../ReportContext';
import { HeaderImage, HeaderTitle } from '../styles/styles';
import ErrorMessage from '../components/ErrorMessage';

import { ActivityIndicator, Platform, View } from 'react-native';
import { colors } from '../styles/colors';

import Dashboard from '../pages/Dashboard';
import Crowd from '../pages/Crowd';
import CrowdList from '../pages/CrowdList';
//import Graphics from '../pages/Graphics';
import api from '../service/api';
import apiCrowd from '../service/apiCrowd';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface TabBarIconProps {
  color: string;
}

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

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <HeaderImage />
      <HeaderTitle>COVID-19 Radar</HeaderTitle>
    </View>
  );
}

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
}

const TabsRoutes = () => {
  const [reports, setReports] = useState<Array<StateReport>>([]);
  const [ufs, setUfs] = useState<Array<String>>([]);
  const [cases, setCases] = useState<Array<Number>>([]);
  const [deaths, setDeaths] = useState<Array<Number>>([]);
  const [suspects, setSuspects] = useState<Array<Number>>([]);
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadReport();
    loadCrowd();
  }, []);

  const loadReport = useCallback(async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await api.get('report/v1'); 

        let ufsAux: Array<String> = [];
        let casesAux: Array<Number> = [];
        let deathsAux: Array<Number> = [];
        let suspectsAux: Array<Number> = [];

        response.data.data.map((reportAux: StateReport) => {
          ufsAux.push(reportAux.uf);
          casesAux.push(reportAux.cases);
          deathsAux.push(reportAux.deaths);
          suspectsAux.push(reportAux.suspects);
          setCurrentDate(reportAux.datetime);
        });
        setUfs(ufsAux);
        setCases(casesAux);
        setDeaths(deathsAux);
        setSuspects(suspectsAux);

        setReports(response.data.data);
      } catch (err) {
          setError(true);
      }
      setLoading(false);
  }, [setUfs, setCases, setDeaths, setReports, setError, setLoading]);

  const loadCrowd = useCallback(async () => {
    try {
      const response = await apiCrowd.get('/case');
      //console.warn(response);
    } catch (err) {
      //console.warn(err.message);
    }
  }, []);

  return (
    <ReportContext.Provider value={{reports, ufs, cases, deaths, suspects, currentDate}}>
      {loading && !error && <Loading />}

      {!loading && error && 
        <ErrorMessage
          errorMessage='Erro ao tentar carregar a lista dos estados.'
          onTryAgainPress={() => loadReport()}
        />
      }
      
      {!loading && !error &&
          <>
            <Tab.Navigator
              initialRouteName="Estados"
              tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.whiteLight,
                style: {
                  borderTopWidth: 0,
                  borderTopColor: 'transparent',
                  backgroundColor: colors.background,
                  shadowColor: colors.shadow,
                  ...Platform.select({
                    ios: {
                      shadowOffset: { height: 2, width: 0 },
                      shadowOpacity: 0.5,
                      shadowRadius: 20,
                    },
                    android: {
                      elevation: 6,
                    },
                  }),
                },
              }}
            >
            {/* Fluxo da lista dos estados */}
              <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  tabBarLabel: 'Estados',
                  tabBarIcon: ({ color }: TabBarIconProps) => (
                    <Icon name="view-list" color={color} size={22} />
                  ),
                }}
              />

              {/* Fluxo da lista dos estados do crowd*/}
              <Tab.Screen
                name="CrowdList"
                component={CrowdList}
                options={{
                  tabBarLabel: 'Crowd Lista',
                  tabBarIcon: ({ color }: TabBarIconProps) => (
                    <Icon name="list-alt" color={color} size={22} />
                  ),
                }}
              />

            {/* Fluxo dos gráficos */}
            {/*
              <Tab.Screen
                name="Graphics"
                component={Graphics}
                options={{
                  tabBarLabel: 'Indicadores',
                  tabBarIcon: ({ color }: TabBarIconProps) => (
                    <Icon name="show-chart" color={color} size={22} />
                  ),
                }}
              />
            */}
            
            {/* Fluxo do crowd */}
              <Tab.Screen
                name="Crowd"
                component={Crowd}
                options={{
                  tabBarLabel: 'Crowd Registro',
                  tabBarIcon: ({ color }: TabBarIconProps) => (
                    <Icon name="groups" color={color} size={22} />
                  ),
                }}
              />
            </Tab.Navigator>
          </>
        }
    </ReportContext.Provider>
  );
};

const Routes: React.FC = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <LogoTitle />,
          headerTintColor: colors.white,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: colors.background
          },
        }}>
        <Stack.Screen
          name="TabsRoutes"
          options={{
            title: 'COVID-19 Radar',
          }}
          component={TabsRoutes}
        />
      </Stack.Navigator>
  );
}

export default Routes;
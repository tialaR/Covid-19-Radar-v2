import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useCallback, useState } from 'react';
import { ReportContext } from '../ReportContext';
import { HeaderImage, HeaderTitle } from '../styles/styles';

import { Platform, View } from 'react-native';
import { colors } from '../styles/colors';

import Dashboard from '../pages/Dashboard';
import Crowd from '../pages/Crowd';
import Graphics from '../pages/Graphics';
import api from '../service/api';

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

const TabsRoutes = () => {
  const [reports, setReports] = useState<Array<StateReport>>([]);
  const [ufs, setUfs] = useState<Array<String>>([]);
  const [cases, setCases] = useState<Array<Number>>([]);
  const [deaths, setDeaths] = useState<Array<Number>>([]);
  const [suspects, setSuspects] = useState<Array<Number>>([]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = useCallback(async () => {
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
          console.warn(err);
      }
  }, [setUfs, setCases, setDeaths, setReports]);

  return (
    <ReportContext.Provider value={{reports, ufs, cases, deaths, suspects, currentDate}}>
      <Tab.Navigator
        initialRouteName="Estados"
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: colors.secondary,
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

      {/* Fluxo dos gráficos */}
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

      {/* Fluxo do crowd */}
        <Tab.Screen
          name="Crowd"
          component={Crowd}
          options={{
            tabBarLabel: 'Crowd',
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <Icon name="groups" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
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
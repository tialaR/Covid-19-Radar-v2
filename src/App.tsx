import React from 'react';
import {
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;

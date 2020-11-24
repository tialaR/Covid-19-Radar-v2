import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '../../../styles/colors';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={colors.secondary} stopOpacity={0.2} />
      <Stop offset={'100%'} stopColor={colors.primary} stopOpacity={0.7} />
    </LinearGradient>
  </Defs>
);

export default Gradient;
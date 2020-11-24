import React from 'react';
import { G, Line } from 'react-native-svg';

//Plano de fundo dos gráficos:
const CustomGrid = ({ x, y, data, ticks }: any) => {
  return (
    <G>
      {
        // Horizontal grid
        ticks.map((tick: any) => (
          <Line
            key={tick}
            x1={'0%'}
            x2={'100%'}
            y1={y(tick)}
            y2={y(tick)}
            stroke={'rgba(255,255,255,0.05)'}
          />
        ))
      }
      {
        // Vertical grid
        data.map((_: any, index: any) => (
          <Line
            key={index}
            y1={'0%'}
            y2={'100%'}
            x1={x(index)}
            x2={x(index)}
            stroke={'rgba(255,255,255,0.05)'}
          />
        ))
      }
    </G>
  );
};

export default CustomGrid;
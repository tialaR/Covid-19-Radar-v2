import React from 'react';
import { View } from 'react-native';
import { Circle } from 'react-native-svg';
import { LineChart, XAxis, AreaChart } from 'react-native-svg-charts';
import { colors } from '../../styles/colors';
import CustomGrid from '../GraphicDecorators/CustomGrid';
import Gradient from '../GraphicDecorators/Gradient';

const LineChartComponent = ({ chartList, bottomList }: any) => {

  const Decorator = ({ x, y, data }: any) => {
    return data.map((value: any, index: any) => (
      <>
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={18}
          stroke={'transparent'}
          fill={'transparent'}
        />
        <Circle
          key={value}
          cx={x(index)}
          cy={y(value)}
          r={3}
          stroke={colors.primary}
          fill={colors.primary}
        />
      </>
    ));
  };


  return (
    <View style={{ paddingHorizontal: 8 }}>
      <AreaChart
        style={{ height: 270, paddingTop: 10 }}
        data={chartList}
        // curve={shape.curveNatural}
        contentInset={{ top: 20, bottom: 20, left: 5, right: 5 }}
        svg={{
          fill: 'url(#gradient)',
          strokeWidth: 2,
        }}>
        <CustomGrid belowChart={true} />
        <Decorator />
        <Gradient />
      </AreaChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={bottomList}
        formatLabel={(index: number) => bottomList[index]}
        svg={{ fontSize: 9, fill: colors.gray }}
        contentInset={{ left: 12, right: 12 }}
      />
    </View>
  );
};

export default LineChartComponent;
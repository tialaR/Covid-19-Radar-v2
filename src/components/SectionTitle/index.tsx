import React from 'react';
import { View } from 'react-native';

import { Title } from './styles';

interface SectionTitleProps {
  title: string;
  sectionTitleStyles?: object;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  sectionTitleStyles = {},
}: SectionTitleProps) => {
  return (
    <View style={sectionTitleStyles}>
      <Title>{title}</Title>
    </View>
  );
};

export default SectionTitle;

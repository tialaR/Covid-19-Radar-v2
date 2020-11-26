import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Overlay,
  Container,
  OutsideAreaButton,
  InformationContainer,
  Title,
  Information,
} from './styles';

interface InformationModalProps {
  isVisible: boolean;
  title?: string;
  information?: string;
  icon?: string;
  iconColor?: string;
  showModal: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({
  isVisible,
  title,
  icon,
  iconColor,
  information,
  showModal,
}: InformationModalProps) => {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <Overlay />
      <OutsideAreaButton onPress={showModal}>
        <Container>
          <InformationContainer>
            {icon && <Icon name={icon} size={60} color={iconColor} />}
            {title && <Title>{title}</Title>}
            {information && <Information>{information}</Information>}
          </InformationContainer>
        </Container>
      </OutsideAreaButton>
    </Modal>
  );
};

export default InformationModal;
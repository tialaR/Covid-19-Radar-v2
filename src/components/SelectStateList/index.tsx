
import React, { PureComponent } from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList } from 'react-native';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SelectContainer,
  SelectItemList,
  SelectText,
  ModalContainer,
  ModalBackgroundScreen,
} from './styles';

interface Props {
  onStatePress: (state: String) => void;
  firstValue?: string;
  list: String[];
}

interface State {
  currentState: String,
  modalVisible: boolean;
  height: number;
  x: number;
  y: number;
}


export default class SelectStateList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentState: this.props.firstValue || '',
      modalVisible: false,
      height: 0,
      x: 0,
      y: 0,
    };
  }

  private hideModal = () => {
    this.setState({ modalVisible: false });
  };

  private containerRef: View | null = null;

  private measure = () => {
    this.hideModal();
    {
      this.containerRef &&
        this.containerRef.measureInWindow((x, y, width, height) => {
          this.setState({ modalVisible: true, x, y: y + 50, height });
        });
    }
  };

  private onLayout = () => {
    if (!this.containerRef) return;
    this.containerRef.measureInWindow((_x, _y, _width) => {
    });
  };

  handleStateChange = (state: String) => {
    this.setState({ currentState: state });
  };

  render() {
    const { modalVisible, x, y } = this.state;
    const { list } = this.props;
    return (
      <>
        <View ref={ref => (this.containerRef = ref)} onLayout={this.onLayout}>
          <SelectContainer onPress={this.measure}>
            <Icon
              name='arrow-drop-down'
              size={22}
              color={colors.whiteLight}
            />
            {this.state.currentState === this.props.firstValue ?
                <SelectText opaque>{this.state.currentState}</SelectText>
              :
                <SelectText>{this.state.currentState}</SelectText>
            }
          </SelectContainer>

          {list && (
            <Modal
              transparent
              visible={modalVisible}
              onRequestClose={this.hideModal}
            >
              <TouchableWithoutFeedback onPress={this.hideModal}>
                <ModalBackgroundScreen>
                  <ModalContainer style={{ top: y, left: x, width: 161 }}>
                    <FlatList
                      data={list}
                      style={{ flex: 1 }}
                      contentContainerStyle={{
                        flexGrow: 1,
                        backgroundColor: colors.surface,
                      }}
                      bounces={false}
                      showsVerticalScrollIndicator
                      renderItem={({ item: state }) => (
                        <SelectItemList
                          onPress={() => {
                            this.handleStateChange(state);
                            this.props.onStatePress(state);
                          }}
                        >
                          <SelectText>{state}</SelectText>
                        </SelectItemList>
                      )}
                      keyExtractor={(_, index) => {
                        return `${index}`;
                      }}
                    />
                  </ModalContainer>
                </ModalBackgroundScreen>
              </TouchableWithoutFeedback>
            </Modal>
          )}
        </View>
      </>
    );
  }
}

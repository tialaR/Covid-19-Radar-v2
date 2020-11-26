import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useRef, useState, useContext } from 'react';
import { ReportContext } from '../../ReportContext';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import * as Yup from 'yup';
import { colors } from '../../styles/colors';
import InformationModal from '../../components/InformationModal';
import SectionTitle from '../../components/SectionTitle';
import RadioButton from '../../components/RadioButton';
import SelectStateList from '../../components/SelectStateList';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErros';
import SelectDate from '../../components/SelectDate';
import { Container, ContainerRowSelects, SelectStateListAux } from './styles';


interface FormData {
  name: string;
}

interface InformationFeedback {
  icon: string;
  color: string;
  message: string;
  status: 'success' | 'error';
}

const Crowd: React.FC = () => {

  const reportContext = useContext(ReportContext);
  const navigation = useNavigation();

  const [currentState, setCurrentState] = useState<String>('');
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [informationFeedback, setInformationFeedback] = useState<
    InformationFeedback
  >({} as InformationFeedback);

  const formRef = useRef<FormHandles>(null);

  const feedbackTryUpdated = useCallback(
    ({ icon, color, message, status }: InformationFeedback) => {
      setShowInformationModal(true);
      setInformationFeedback({
        icon,
        color,
        message,
        status,
      });
    },
    [setShowInformationModal, setInformationFeedback],
  );

  const handleInformationModalClose = useCallback(() => {
    setShowInformationModal(false);
  }, [setShowInformationModal]);

  const handleRegister = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          name: data.name,
        };

        feedbackTryUpdated({
          status: 'success',
          color: colors.primary,
          icon: 'done',
          message: 'Registro realizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErrors(err);
          formRef.current?.setErrors(erros);

          return;
        }

        feedbackTryUpdated({
          status: 'error',
          color: colors.primary,
          icon: 'error-outline',
          message:
            'Ocorreu um erro ao realizar o registro, tente novamente.',
        });
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>

          <SectionTitle
            sectionTitleStyles={{ marginTop: 20 }}
            title="Registrar caso ou óbito"
          />

          <Form
            initialData={{ name: '' }}
            ref={formRef}
            onSubmit={handleRegister}
          >
            <Input
              autoCapitalize="words"
              name="name"
              icon="person"
              placeholder="Nome completo"
              returnKeyType="next"
            />

            <ContainerRowSelects>
              <SelectStateListAux>
                <SelectStateList
                  onStatePress={(state: String) => {setCurrentState(state); console.warn(state)}}
                  list={reportContext.ufs}
                  firstValue='Estado'
                />
              </SelectStateListAux>
              <RadioButton 
                textOne='Caso'
                textTwo='Óbito'
                onRadioSelect={(choice: string) => console.warn(choice)}
              />
            </ContainerRowSelects>

            <SelectDate
              onSelectDate={(date: string) => console.warn(date)}
            />
            
            <Button onPress={() => formRef.current?.submitForm()}>
              Registrar
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>

      <InformationModal
        isVisible={showInformationModal}
        information={informationFeedback.message}
        icon={informationFeedback.icon}
        iconColor={informationFeedback.color}
        showModal={handleInformationModalClose}
      />
    </>
  );
};

export default Crowd;

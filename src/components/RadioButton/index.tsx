import React, { useState, useCallback } from 'react';
import { Container, RadioContainer, RadioText } from './styles';

interface RadioButtonProps {
    textOne: string;
    textTwo: string;
    selectDefault?: boolean;
    onRadioSelect: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ textOne, textTwo, onRadioSelect, selectDefault }) => {
    const [select, setSelect] = useState('first');

    const handleSelect = useCallback((check: string) => {
        setSelect(check);        
    }, [setSelect]);

    return(
        <Container>
            <RadioContainer 
                first
                selectDefault
                status={ select === 'first' ? 'checked' : 'unchecked' }
                onPress={() =>{ handleSelect('first'); onRadioSelect(textOne);}}
            >
                <RadioText 
                    status={ select === 'first' ? 'checked' : 'unchecked' }
                >
                    {textOne}
                </RadioText>
            </RadioContainer>
            <RadioContainer
                status={ select === 'second' ? 'checked' : 'unchecked' }
                onPress={() => {handleSelect('second'); onRadioSelect(textTwo);}}
            >
                <RadioText 
                    status={ select === 'second' ? 'checked' : 'unchecked' }
                >
                    {textTwo}
                </RadioText>
            </RadioContainer>
        </Container>
    );
}

export default RadioButton;

import React from 'react';
import styled from 'styled-components';

const CancelButtonContainer = styled.TouchableOpacity`
    height: 48px;
    width: 176px;
    border-radius: 4px;
    background-color: #FFFFFF;
    justify-content: center;
    border: 1px solid #0084FF;
`;

const CancelButtonText = styled.Text`
    color: #0084FF;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
    height: 48px;
    width: 176px;
    border-radius: 4px;
    background-color: #3D83FF;
    justify-content: center;
`;

const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
`;

const ButtonGroupContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

const DisabledButtonContainer = styled.TouchableOpacity`
    height: 48px;
    width: 176px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.06);
    justify-content: center;
`;

const DisabledButtonText = styled.Text`
    color: rgba(0,0,0,0.34);
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
`;

export const ButtonGroup = ({children}) => (
    <ButtonGroupContainer>
        {children}
    </ButtonGroupContainer>
);

export const DisabledButton = ({buttonText, style}) => (
    <DisabledButtonContainer style={style}>
        <DisabledButtonText>{buttonText}</DisabledButtonText>
    </DisabledButtonContainer>
)

export const CancelButton = ({handler, buttonText, style}) => (
    <CancelButtonContainer
        style={{...style}}
        onPress={handler}>
        <CancelButtonText>{buttonText}</CancelButtonText>
    </CancelButtonContainer>
);

const Button = ({buttonText, style, handler}) => (
    <ButtonContainer 
        onPress={handler}
        style={{...style}}>
        <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
);

export default Button;

import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
    height: 48px;
    width: 176px;
    border-radius: 4px;
    background-color: #3D83FF;
    justify-content: center;
`;

const ButtonText = styled.Text`
    color: #FFFFFF;
    /* font-family: "SF UI Text"; */
    font-size: 16px;
    /* font weight number dont work in android?*/
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 22px;
    text-align: center;
    height: 22px;
`;

const Button = ({buttonText, style, handler}) => (
    <ButtonContainer 
        onPress={handler}
        style={{...style}}>
        <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
);

export default Button;

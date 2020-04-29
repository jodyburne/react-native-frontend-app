import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';

export const Box = styled.TextInput`
    height: 50px;
    width: 315px;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-size: 14px;
    color: #40403D;
    opacity: 0.5;
    padding: 15px;
    font-family: 'Heebo-Regular';
`;

export const Label = styled.Text`
    color: #40403D;
    font-size: 14px;
    font-family: 'Heebo-Medium';
    margin-bottom: 5px;
`;

const UserInput = ({placeholder, handler, value, label}) => {
    return (
        <View >
            {label && <Label>{label}</Label> }
            <Box 
                placeholder={placeholder}
                onChangeText={handler}
                value={value}
                autoCorrect={false}
                />
        </View>
    )
};

export default UserInput;

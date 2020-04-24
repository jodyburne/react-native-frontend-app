import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components';

const SubHeadingContainer = styled.View`
    height: 70px;
    width: ${Dimensions.get('window').width}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: #D8D8D8;
    background-color: #FFFFFF;
    padding: 0 30px;
`;

const TextContainer = styled.View`
    flex-direction: row;
`;

const SubHeadingText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
`;

const ThingToDoHeading = ({state, handler, icon, text}) => (
    <SubHeadingContainer>
        <TextContainer>
            <Icon 
                name={icon}
                size={25}
                style={{color: "#3D83FF"}}
            />
            <SubHeadingText>{text}</SubHeadingText>
        </TextContainer>
            <TouchableOpacity
                onPress={handler}>
                <Icon 
                    name={state ? "chevron-down" : "chevron-up"}
                    size={25}
                    style={{color: "#3D83FF"}}
                />
            </TouchableOpacity>
    </SubHeadingContainer>
);

export default ThingToDoHeading;



import React from 'react';
import styled from 'styled-components';
import CloseIcon from 'react-native-vector-icons/EvilIcons';
import RoundCheckbox from 'rn-round-checkbox';
import { Item, Content, CrossContainer } from './ListItem';

const CheckBoxContainer = styled.TouchableOpacity`
    height: 68px;
    width: 60px;
    align-items: center;
    justify-content: center;
`;

const CheckListItem = ({value, handler, checkValue, checkHandler}) => (
    <Item style={{elevation: 4}}>
        <CheckBoxContainer>
            <RoundCheckbox
                size={26}
                checked={checkValue}
                onValueChange={checkHandler}
                borderColor="#3D83FF"
            />
        </CheckBoxContainer>
        <Content 
            value={value} 
            autoCorrect={false}
            editable={false}/>
        <CrossContainer
            onPress={handler}>
            <CloseIcon 
                name='close' 
                size={26} 
                style={{color:'#A6A6A6'}}/>
        </CrossContainer>
    </Item>
);


export default CheckListItem;

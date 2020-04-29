import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Item = styled.View`
    height: 70px;
    width: 350px;
    border: 1px solid #D8D8D8;
    background-color: #FFFFFF; 
    flex-direction: row;
    border-radius: 4px;
    margin: 5px;
`;

export const Content = styled.TextInput`
    flex: 1;
    font-size: 16px;
    line-height: 21px;
    padding-left: 20px;
    padding-right: 20px;
    color: #40403D;
`;

export const CrossContainer = styled.TouchableOpacity`
    height: 68px;
    width: 60px;
    border-left-color: #D8D8D8;
    border-left-width: 1px;
    border-style: solid;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #F9F9F9;
    align-items: center;
    justify-content: center;
`;


const ListItem = ({value, handler, icon, style, placeholder, onChange, editable}) =>  (
        <Item style={{elevation: 4}}>
                <Content 
                    placeholder={placeholder}
                    value={value} 
                    autoCorrect={false}
                    editable={editable}
                    onChangeText={onChange}
                    onSubmitEditing={handler}/>
            <CrossContainer
                onPress={handler}>
                <Icon 
                    name={icon} 
                    size={26} 
                    style={{...style, color:'#A6A6A6'}}
                />
            </CrossContainer>
        </Item>
    );

export default ListItem;

// poss icon names right, close, plus
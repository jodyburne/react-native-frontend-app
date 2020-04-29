import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

const Rectangle = styled.View`
    height: 50px;
    width: 315px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

const SearchInput = styled.TextInput`
    flex: 1;
    color: #40403D;
    opacity: 0.5;
    width: 210px;
    padding-left: 20px;
    font-size: 16px;
    font-family: 'Heebo-Regular';
`;

const SearchBar = ({placeholder, handler, value, onSubmit}) => {
    return (
        <>
            <Rectangle>
                <Icon 
                    name="search1"
                    size={30}
                    color="#3D83FF"
                    />
                <SearchInput 
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handler}
                    onSubmitEditing={onSubmit}/>
            </Rectangle>
        </>
    )
};

export default SearchBar;

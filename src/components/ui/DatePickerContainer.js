import React from 'react';
import styled from 'styled-components';

const Box = styled.View`
    height: 80px;
    width: 130px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    background-color: #F9F9F9;
    justify-content: flex-end;
`; 

const Content = styled.View`
    height: 45px;
    width: 128px;
    border-top-color: #E5E5E5;
    border-top-width: 1px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; 
    background-color: #FFFFFF;
    align-items: center;
    justify-content:center;
`;

const ContentText = styled.Text`
    color: #40403D;
    font-family: 'Heebo-Regular';
    font-size: 14px;
    text-align: center;
`;

const HeaderText = styled.Text`
    text-align: center;
    margin-bottom: 7px;
    font-size: 12px;
    font-family: 'Heebo-Light';
`;

const DatePickerContainer = ({header, value}) => {
    return (
            <Box>
                <HeaderText>{header}</HeaderText>
                <Content><ContentText>{value}</ContentText></Content>  
            </Box>
    )
};

export default DatePickerContainer;

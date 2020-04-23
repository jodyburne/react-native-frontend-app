import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';

const Container = styled.View`
    width: ${Dimensions.get('window').width}px;
    border-top-width: 1px;
    border-top-color:  #D8D8D8;
    display: flex;
    align-items: center;
    padding: 5px;
    `;

const Footer = ({children, style}) => {
    return <Container style={style}>{children}</Container>
};

export default Footer;

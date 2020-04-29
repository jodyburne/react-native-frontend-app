import React from 'react';
import styled from 'styled-components';

const TitleText = styled.Text`
    color: #40403D;
    font-size: 18px;
    text-align: center;
    font-family: 'Heebo-Light';
`;

const Title = ({title, style}) => {
    return (
        <TitleText style={style}>{title}</TitleText>
    )
};

export default Title;

import React from 'react';
import styled from 'styled-components';

const TitleText = styled.Text`
    color: #40403D;
    font-size: 18px;
    text-align: center;
`;

const Title = ({title}) => {
    return (
        <TitleText>{title}</TitleText>
    )
};

export default Title;

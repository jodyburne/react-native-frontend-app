import React from 'react';
import styled from 'styled-components';

const LeftTab = styled.TouchableOpacity`
    height: 70px;
    width: 173px;
    opacity: 0.9;
    border-top-left-radius: 6px;
    background-color: #FFFFFF;

    /* box-shadow: inset 1px 0 1px 0 rgba(0,0,0,0.06) */
    align-items: center;
    justify-content: center;
`;
const RightTab = styled.TouchableOpacity`
    height: 70px;
    width: 172px;
    border-top-right-radius: 6px;
    background-color: #FFFFFF;
    /* box-shadow: inset 1px 0 1px 0 rgba(0,0,0,0.06) */    
    align-items: center;
    justify-content: center;
`;

const LeftText = styled.Text`
    opacity: 0.5;
    color: #40403D;
    font-family: Heebo;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 21px;
    text-align: center;
`;

const RightText = styled.Text`
    color: #40403D;
    font-family: Heebo;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 21px;
    text-align: center;
`;


const Container = styled.View`
    flex-direction: row;
`;

const TripsTabs = () => (
    <Container>
        <LeftTab>
            <LeftText>Trips I did</LeftText>
        </LeftTab>
        <RightTab>
            <RightText>Trips I'm doing</RightText>
        </RightTab>
    </Container>
);

export default TripsTabs;

import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LeftTab = styled.TouchableOpacity`
    height: 70px;
    width: 173px;
    opacity: 0.9;
    border-top-left-radius: 6px;
    background-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const RightTab = styled.TouchableOpacity`
    height: 70px;
    width: 172px;
    border-top-right-radius: 6px;
    background-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const LeftText = styled.Text`
    opacity: 0.5;
    color: #40403D;
    font-size: 14px;
    text-align: center;
`;

const RightText = styled.Text`
    color: #40403D;
    font-size: 14px;
    text-align: center;
`;


const Container = styled.View`
    flex-direction: row;
`;

const TripsTabs = () => (
    <Container>
        <LeftTab>
            <Icon
                name="airplane-landing"
                size={30}
                style={{color: '#3D83FF', 
                    marginRight: 5, 
                    opacity: 0.5}} />
            <LeftText>Trips I did</LeftText>
        </LeftTab>
        <RightTab>
            <Icon
                name="airplane-takeoff"
                size={30}
                style={{color: '#3D83FF', 
                    marginRight: 5}} />
            <RightText>Trips I'm doing</RightText>
        </RightTab>
    </Container>
);

export default TripsTabs;

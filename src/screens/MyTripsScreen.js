import React from 'react';
import styled from 'styled-components';
import TripsCard from '../components/myTrips/TripsCard'
import Button from '../components/ui/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Container = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

const MyTripsScreen = ({navigation}) => {
    return (
        <Container>
            <TouchableOpacity onPress={()  => navigation.navigate('MyProfile')}>
                <Icon name="account" size={25} />
            </TouchableOpacity>
            <TripsCard />
            <ButtonGroup>
                <Button style={{marginRight: 4}} buttonText="Find Brighters" />
                <Button 
                    style={{marginLeft: 4}}
                    buttonText="Create Trip"
                    handler={() => navigation.navigate('AddTrip')} />
            </ButtonGroup>
        </Container>
    );
}

export default MyTripsScreen;

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/ui/Button';
import styled from 'styled-components';
import UserInput from '../components/ui/UserInput';
import Title from '../components/ui/Title';
import Duration from '../components/addTrip/Duration';
import Footer from '../components/ui/Footer';

const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Container = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
`;

const AddTripScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
    <Container>
        <Title title="Create your trip" />
        <UserInput 
            handler={setName}
            value={name}
            placeholder="My Trip"
            label="Trip" 
        />
        <Duration 
            startDate={startDate}
            changeStart={setStartDate}
            endDate={endDate}
            changeEnd={setEndDate}
        />
    {/* <Footer> */}
        <ButtonGroup>
            <Button 
                style={{marginRight: 4}} 
                buttonText="Back" 
                handler={() => navigation.navigate('MyTrips')} />
            <Button 
                style={{marginLeft: 4}}
                buttonText="Next"
                handler={() => navigation.navigate('Places', {name, startDate, endDate})} />
        </ButtonGroup>
    {/* </Footer> */}
    </Container>
    )
};


export default AddTripScreen;

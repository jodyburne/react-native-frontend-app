import React, {useState, useContext} from 'react';
import {Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Button from '../components/ui/Button';
import styled from 'styled-components';
import RootContext from '../RootContext';
import {getId} from '../App';
import SearchBar from '../components/ui/SearchBar';
import Footer from '../components/ui/Footer';
import Title from '../components/ui/Title';
import ListItem from '../components/ui/ListItem';
import {Label} from '../components/ui/UserInput';

const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const TripName = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #40403D;
    text-align: center;
`;

const CenteredView = styled.View`
    align-items: center;
    margin-top: 30px;
`;

const PlacesContainer = styled.View`
    margin-top: 30px;
    min-height: 300px;
    width: 360px;
`;

const PlacesScreen = ({navigation}) => {
    const { actions } = useContext(RootContext);
    const [place, setPlace] = useState('');
    const [places, setPlaces] = useState([]);
    const { name, startDate, endDate } = navigation.state.params;

    const handleSubmit = () => {
        setPlaces([...places, {
            name: place,
            id: getId(),
            thingsToDo: {}
        }])
        setPlace('');
    };

    const handleDelete = id => {
        const copy = [...places];
        const filtered = copy.filter(p => p.id !== id);
        setPlaces(filtered);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <CenteredView>
                    <Title title="Add places to your trip" />
                    <TripName>{name}</TripName>
                    <CenteredView>
                        <SearchBar 
                            placeholder="Start typing"
                            handler={setPlace}
                            value={place}
                            onSubmit={handleSubmit}
                        />
                    </CenteredView>
                    <PlacesContainer>
                        <Label style={{alignSelf: 'flex-start'}}>Places</Label>
                        {places.length > 0 ?
                            <FlatList
                                data={places}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => { 
                                return (
                                    <ListItem 
                                        icon="close"
                                        value={item.name}
                                        editable={false}
                                        handler={() => handleDelete(item.id)}
                                    />
                                )}} />
                            :  
                                <Text>You don't have any places for this trip</Text>
                        }
                    </PlacesContainer>
                </CenteredView>
            </ScrollView>
        <   Footer>
            <ButtonGroup style={{marginTop: 10}}>
                <Button 
                    style={{marginRight: 4}} 
                    buttonText="Back" 
                    handler={() => navigation.goBack()} />
                <Button 
                    style={{marginLeft: 4}}
                    buttonText="Done"
                    handler={() => {
                        actions.addTrip(
                            {
                                id: getId(),
                                name, 
                                duration: {
                                    start: startDate,
                                    end: endDate,
                                },
                                places
                            })
                        navigation.navigate('MyTrips')}} />
                </ButtonGroup>
            </Footer>
        </SafeAreaView>
)}

export default PlacesScreen;

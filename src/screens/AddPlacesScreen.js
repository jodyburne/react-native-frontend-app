import React, {useState, useContext} from 'react';
import {ScrollView, FlatList} from 'react-native';
import Button, {ButtonGroup, CancelButton, DisabledButton} from '../components/ui/Button';
import styled from 'styled-components';
import RootContext from '../RootContext';
import {getId} from '../App';
import SearchBar from '../components/ui/SearchBar';
import Footer from '../components/ui/Footer';
import Title from '../components/ui/Title';
import ListItem from '../components/ui/ListItem';
import {Label} from '../components/ui/UserInput';

const TripName = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #40403D;
    text-align: center;
`;

export const CenteredView = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const PlacesContainer = styled.SafeAreaView`
    margin-top: 30px;
    padding: 10px 20px;
    flex: 1;
    background-color: #FFFFFF;
`;

export const NoPlacesText = styled.Text`
    font-size: 18px;
    opacity: 0.53;
    color: #40403D;
`;

const shadow = {
    textShadowColor: 'rgba(0,0,0,0.09)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
};

const AddPlacesScreen = ({navigation}) => {
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
    };

    return (
        <>  
            <CenteredView>
                <Title title="Add places to your trip" />
                <TripName>{name}</TripName>
            </CenteredView>
            <CenteredView>
                <SearchBar 
                    placeholder="Start typing"
                    handler={setPlace}
                    value={place}
                    onSubmit={handleSubmit}
                />
            </CenteredView>
                <PlacesContainer style={shadow}>
                    <ScrollView>
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
                                <NoPlacesText>You don't have any places for this trip</NoPlacesText>
                        }
                    </ScrollView>
                </PlacesContainer>
            <Footer>
                <ButtonGroup style={{marginTop: 10}}>
                    <CancelButton 
                        style={{marginRight: 4}} 
                        buttonText="Back" 
                        handler={() => navigation.goBack()} />
                    {
                        (place || places.length > 0) ?
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
                        : 
                            <DisabledButton 
                                buttonText="Done"/>
                    }
                    </ButtonGroup>
            </Footer>
        </>
    )
};

export default AddPlacesScreen;

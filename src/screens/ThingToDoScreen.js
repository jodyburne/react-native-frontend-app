import React, {useState, useContext, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import styled from 'styled-components';
import RootContext from '../RootContext';
import Button, {CancelButton, ButtonGroup} from '../components/ui/Button';
import Title from '../components/ui/Title';
import DeleteModal, {OpenModalLink} from '../components/tripDetail/DeleteModal';
import ThingToDo from '../components/tripDetail/ThingToDo';
import Footer from '../components/ui/Footer';
import ThingToDoHeading from '../components/tripDetail/ThingToDoHeading';

const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
`;

const TitleContainer = styled.View`
    height: 90px;
    justify-content: center;
    background-color: #f0f0f0;
`;

const ThingToDoScreen = ({navigation}) => {

    const [ resto, setResto ] = useState('');
    const [ hotel, setHotel ] = useState('');
    const [ attraction, setAttraction ] = useState('');
    const [ other, setOther ] = useState('');
    const [ data, setData ] = useState({});
    const [visible, setVisible] = useState(false);
    const [ show, setShow ] = useState({
        restaurants: false,
        hotels: false,
        attractions: false,
        others: false
    });

    const { actions, state: {trips} } = useContext(RootContext);
    const { placeId, tripId } = navigation.state.params;
    const trip = trips.find(t => t.id === tripId);

    const placeIndex = trip.places.indexOf(trip.places.find(p => p.id === placeId));

    const place = trip.places[placeIndex]

    const tripCopy = {...trip };
    
    useEffect(()=> {
        setData(place.thingsToDo);  
    },[])

    const deletePlace = () => {
        tripCopy.places.splice(placeIndex, 1);
        actions.editTrip(tripCopy);
        navigation.navigate('TripDetail', {trip});
    };

    return (
        <Container>
            {place &&
                <ScrollView>
                    <TitleContainer>
                        <Title 
                            title="Things I'm going to do"/>
                    </TitleContainer>
                    <Modal 
                        animationType="slide"
                        //transparent={true}
                        visible={visible}>
                        <DeleteModal 
                            title={place.name}
                            mainText="Are you sure you want to remove this place from your trip?"
                            smallPrint={`By removing ${place.name} from your trip you are also removing the list of things related to this place.`}
                            cancelHandler={() => setVisible(!visible)}
                            removeHandler={() => {
                                setVisible(!visible)
                                deletePlace()
                            }}
                        />
                        </Modal>
                    <ThingToDoHeading 
                        state={show.restaurants}
                        handler={() => {
                            setShow({...show, restaurants: !show.restaurants})}}
                        icon="utensils"
                        text="Restaurants"
                    />
                    {show.restaurants && 
                        <ThingToDo 
                            data={data}
                            placeIndex={placeIndex}
                            tripCopy={tripCopy}
                            thingToDo='restaurants'
                            state={resto}
                            callback={setResto}
                        />  }
                    <ThingToDoHeading 
                        state={show.hotels}
                        handler={() => {
                            setShow({...show, hotels: !show.hotels})}}
                        icon="hotel"
                        text="Hotels"
                    />
                    {show.hotels && 
                        <ThingToDo 
                            data={data}
                            placeIndex={placeIndex}
                            tripCopy={tripCopy}
                            thingToDo="hotels"
                            state={hotel}
                            callback={setHotel}
                        />  }
                    <ThingToDoHeading 
                        state={show.attractions}
                        handler={() => {
                            setShow({...show, attractions: !show.attractions})}}
                        icon="fort-awesome"
                        text="Attractions"
                    />
                    {show.attractions && 
                        <ThingToDo 
                        data={data}
                        placeIndex={placeIndex}
                        tripCopy={tripCopy}
                        thingToDo="attractions"
                        state={attraction}
                        callback={setAttraction}
                    />  }    
                    <ThingToDoHeading 
                        state={show.others}
                        handler={() => {
                            setShow({...show, others: !show.others})}}
                        icon="compass"
                        text="Other"
                    />  
                    {show.others && 
                        <ThingToDo 
                            data={data}
                            placeIndex={placeIndex}
                            tripCopy={tripCopy}
                            thingToDo="others"
                            state={other}
                            callback={setOther}
                        />  }   
                </ScrollView>
            }
            <OpenModalLink 
                text="Remove place from trip"
                handler={() => setVisible(true)}
                color="#40403D"
                />
            <Footer>
                <ButtonGroup>
                    <CancelButton 
                        buttonText="Back"
                        handler={() => navigation.navigate('TripDetail', { trip })}
                    />
                    <Button 
                        buttonText="My Trips"
                        handler={() => navigation.navigate('MyTrips')}/>
                </ButtonGroup>
            </Footer>
        </Container>
    );
};



export default ThingToDoScreen;

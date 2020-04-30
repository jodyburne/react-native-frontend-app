import React, {useContext, useState} from 'react';
import { View, FlatList, TouchableOpacity, Modal, SafeAreaView, ScrollView} from 'react-native';
import RootContext from '../RootContext';
import Duration from '../components/addTrip/Duration';
import ListItem from '../components/ui/ListItem';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DeleteModal, {OpenModalLink} from '../components/tripDetail/DeleteModal';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';

const CheckListContainer = styled.View`
    margin-left: 5px;
    margin-bottom: 10px;
    height: 111px;
    width: 350px;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    background-color: #F9F9F9;
    justify-content: flex-end;
    align-items: center;
`;

const Lower = styled.View`
    height: 40px;
    width: 348px;
    border-top-width: 1px;
    border-top-color: #D8D8D8;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; 
    background-color: #FFFFFF;
    align-items: center;
    justify-content:center;
`;

const BackDrop = styled.ImageBackground`
    flex: 1;
    align-items: center;
`;

const LinkText = styled.Text`
    color: #40403D;
    font-size: 12px;
    font-family: 'Heebo-Regular';
`;

const Label = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Heebo-Medium';
    margin-bottom: 10px;
    margin-left: 5px;
    margin-top: 25px;
`;

const Header = styled.Text`
    color: #FFFFFF;
    font-size: 32px;
    font-family: 'Heebo-Bold';
    text-align: center;
    margin-top: 100px;
    margin-bottom: 30px;
`;

const NoPlaces = styled.Text`
    color: #FFFFFF;
    font-family: 'Heebo-Regular';
    font-size: 16px;
`;

const TripDetailScreen = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const { trip } = navigation.state.params;
    const { actions } = useContext(RootContext);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <BackDrop
                source={{uri: "https://wimg.jakpost.travel/wimages/sm/186-1865394_mount-fuji-sunset-mt-fuji-wallpaper-portrait.jpg"}}>
                <Modal 
                    animationType="slide"
                    //transparent={true}
                    visible={visible}>
                    <DeleteModal 
                        title={trip.name}
                        mainText="Are you sure you want to remove this trip?"
                        smallPrint={`By removing ${trip.name} from your trips you are also removing the list of places related to it`}
                        cancelHandler={() => setVisible(!visible)}
                        removeHandler={() => {
                            setVisible(!visible)
                            actions.deleteTrip(trip)
                            navigation.navigate('MyTrips');
                        }}
                    />
                </Modal>
                { trip.places.length > 0 ?    
                    <FlatList
                        ListHeaderComponent={
                            <>
                                <Header>{trip.name}</Header>
                                <Label>Duration</Label>
                                <Duration
                                    style={{width: 350, marginLeft: 5}}
                                    startDate={trip.duration.start}
                                    endDate={trip.duration.end}
                                />
                                <Label>Places</Label>
                            </>
                            }
                        data={trip.places}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => { 
                            return (
                                <ListItem 
                                    fontSize={{fontSize: 24}}
                                    icon="right"
                                    value={item.name}
                                    editable={false}
                                    handler={() => navigation.navigate('ThingsToDo', {tripId: trip.id, placeId: item.id, name: item.name})}
                                />
                            )}} 
                        ListFooterComponent={
                            <>
                                <Label>Organise your trip</Label>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('CheckList', {tripId: trip.id })
                                    }}>
                                    <CheckListContainer>
                                        <Icon 
                                            style={{marginBottom: 15, color: '#3D83FF'}}
                                            name="clipboard-list"
                                            size={30}
                                        />
                                        <Lower>
                                            <LinkText>Check List</LinkText>
                                        </Lower>
                                    </CheckListContainer>
                                </TouchableOpacity>
                                <OpenModalLink 
                                    text="Remove from your trips"
                                    handler={() => setVisible(true)}
                                />
                            </>
                        }
                    />
                :
                <ScrollView>
                    <Header>{trip.name}</Header>
                    <Label>Duration</Label>
                    <Duration
                        style={{width: 350, marginLeft: 5}}
                        startDate={trip.duration.start}
                        endDate={trip.duration.end}
                    />
                        <View>
                            <Label>Places</Label>
                                    <NoPlaces>You don't have any places for this trip</NoPlaces>
                        </View>
                        <Label>Organise your trip</Label>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('CheckList', {tripId: trip.id })
                            }}>
                            <CheckListContainer>
                                <Icon 
                                    style={{marginBottom: 15, color: '#3D83FF'}}
                                    name="clipboard-list"
                                    size={30}
                                />
                                <Lower>
                                    <LinkText>Check List</LinkText>
                                </Lower>
                            </CheckListContainer>
                        </TouchableOpacity>
                        <OpenModalLink 
                            text="Remove from your trips"
                            handler={() => setVisible(true)}
                            />
                </ScrollView>
                }
            </BackDrop>
            <Footer>
                <Button 
                    style={{width: 360}}
                    handler={() => navigation.navigate('MyTrips')}
                    buttonText="Done"/>
            </Footer>
        </SafeAreaView>
    );
};

export default TripDetailScreen;
import React, {useContext} from 'react';
import styled from 'styled-components';
import { View, TouchableOpacity, FlatList } from 'react-native';
import TripsTabs from './TripsTabs';
import RootContext from '../../RootContext';
import { navigate } from '../../navigationRef';
import Icon from 'react-native-vector-icons/AntDesign';

const Square = styled.View`
    height: 317px;
    width: 345px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
    padding: 22px 25px;
`;

const TripHeader = styled.Text`
    margin-bottom: 10px;
    color: #40403D;
    font-size: 14px;
    font-family: 'Heebo-Medium';    
`;

const NoTripsText = styled.Text`
    opacity: 0.53;
    color: #40403D;
    font-size: 18px;
    font-family: 'Heebo-Light';
`;


const TripContainer = styled.ImageBackground`
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin: 5px;
    z-index: 1;
`;

const TripName = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-family: 'Heebo-Light';
`;

const GlobeImage = styled.Image`
    height:165px;
    width: 214px;
`;

const shadow = {
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.09)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10
};

const TripsCard = () => {
    const { state, actions } = useContext(RootContext);
    const { trips } = state;

    const renderTrips = () => {
        if (!trips) return null;
        if (trips.length > 0) {
             return (
                <FlatList
                    data={trips}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => { 
                  return (
                    <View >
                        <TripContainer
                            imageStyle={{borderRadius: 4}}                          
                            source={{uri: "https://wimg.jakpost.travel/wimages/sm/186-1865394_mount-fuji-sunset-mt-fuji-wallpaper-portrait.jpg"}}>
                            <TouchableOpacity
                                onPress={() => {
                                navigate('TripDetail', {trip: item})}}>
                                <TripName>{item.name}</TripName>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { actions.deleteTrip(item)}}>
                                <Icon 
                                    name="close"
                                    style={{color: '#FFFFFF'}}
                                    size={20}/>
                            </TouchableOpacity>
                        </TripContainer>
                    </View>
                )}} />
            )
        } else {
            return (
                <View>
                    <NoTripsText>You don't have any trips created</NoTripsText>
                    <View style={{alignItems: 'center', marginTop: 35}}>
                        <GlobeImage source={require('../../assets/no-future-trip.png')}/>
                    </View>
                </View>
            )
        }
    };

    return (
        <View >
            <TripsTabs />
            <Square style={shadow}>
                <TripHeader>Trips</TripHeader> 
                {renderTrips()}
            </Square>
        </View>
    );
};

export default TripsCard;
 
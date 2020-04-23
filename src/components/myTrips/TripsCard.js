import React, {useContext} from 'react';
import styled from 'styled-components';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import TripsTabs from './TripsTabs';
import RootContext from '../../RootContext';
import { navigate } from '../../navigationRef';

const Square = styled.View`
    height: 317px;
    width: 345px;
    background-color: #FFFFFF;
    /* border radius and box shadow as below dont work*/
    /* border-radius: 0px 0px 6px 6px; */
    /* box-shadow: 0 2px 10px 0 ; */
    border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
    padding: 22px 25px;
`;

const TripHeader = styled.Text`
    margin-bottom: 10px;
    color: #40403D;
    font-family: Heebo;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 22px;
`;

const NoTripsText = styled.Text`
    opacity: 0.53;
    color: #40403D;
    font-family: Heebo;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 22px;
`;

const TripsCard = () => {
const { state } = useContext(RootContext);
const { trips } = state;

const renderTrips = () => {
        if (!trips) return null;
        if (trips.length > 0) {
             return (
                <FlatList
                    data={trips}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => { 
                  return (
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigate('TripDetail', {trip: item})}}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}} />
            )
        } else {
            return (
                <View>
                    <NoTripsText>You don't have any trips created</NoTripsText>
                </View>
            )
        }
    };

    return (
        <View>
            <TripsTabs />
                <Square style={styles.boxshadow}>
                    <TripHeader>Trips</TripHeader> 
                    {renderTrips()}
                </Square>
        </View>
    );
};

const styles = StyleSheet.create({
    boxshadow: {
        elevation: 5,
        shadowColor: 'rgba(0,0,0,0.09)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10
    }
})

export default TripsCard;
 
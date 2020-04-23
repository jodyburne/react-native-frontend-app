import React, {useState, useContext, useEffect} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import RootContext from '../RootContext';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/ui/Button';
import {getId} from '../App';

const ThingToDoScreen = ({navigation}) => {
    const [ resto, setResto ] = useState('');
    const [ hotel, setHotel ] = useState('');
    const [ data, setData ] = useState({});
    const [ attraction, setAttraction ] = useState('');
    const [ other, setOther ] = useState('');

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
    }

    const renderThingToDo = (title, thingToDo, state, callback) => {

        const deleteItem = item => {
            const index = data[thingToDo].indexOf(item);
            tripCopy.places[placeIndex].thingsToDo[thingToDo].splice(index, 1);
            actions.editTrip(tripCopy)
        };

        const addItem = () => {
            const id = getId();
            if (!tripCopy.places[placeIndex].thingsToDo[thingToDo]) {
                tripCopy.places[placeIndex].thingsToDo[thingToDo] = []}
                tripCopy.places[placeIndex].thingsToDo[thingToDo].push({name: state, completed: false, id});
                actions.editTrip(tripCopy);
                callback('');
        }

        return (
            <View>
            <Text>{title}</Text>
            <FlatList
                data={data[thingToDo]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => { 
                  return (
                    <View>
                        <Text>{item.name}</Text>
                    <TouchableOpacity
                        onPress={() => deleteItem(item)}>
                        <Icon name="delete" size={25} />
                    </TouchableOpacity>
                </View>
                  )}} />
            <TextInput 
                style={styles.input}
                name={title}
                value={state}
                onChangeText={callback}
            />
            <TouchableOpacity
                onPress={addItem}
            ><Text>Add</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <Text>Things to do </Text>
            {place ? 
            <View>
            <Text>{place.name}</Text>

        {renderThingToDo('Restaurants', 'restaurants', resto, setResto)}
        {renderThingToDo('Hotel', 'hotels', hotel, setHotel)}
        {renderThingToDo('Attractions', 'attractions', attraction, setAttraction)}
        {renderThingToDo('Other', 'others', other, setOther)}
            <Button 
                buttonText="Delete"
                handler={deletePlace}/>
            <Button 
                buttonText="My Trips"
                handler={() => navigation.navigate('MyTrips')}/>
            </View> 
            : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1, 
        width: 300
    }
})

export default ThingToDoScreen;

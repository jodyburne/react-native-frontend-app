import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import Button from '../components/ui/Button';
import RootContext from '../RootContext';
import {getId} from '../App';
import CheckListItem from '../components/ui/CheckListItem';
import ListItem from '../components/ui/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../components/ui/Footer';
import Title from '../components/ui/Title';
import {SubHeadingText} from '../components/tripDetail/ThingToDoHeading';

const HeadingContainer = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 10px;
    align-items: center;
`;

const CenteredView = styled.View`
    align-items: center;
`;

const CheckListScreen = ({navigation}) => {
    const [ listItem, setListItem ] = useState('');
    const [ checked, setChecked ] = useState({});

    const { actions, state: {trips} } = useContext(RootContext);
    const { tripId } = navigation.state.params;
    const trip = trips.find(t => t.id === tripId);
    
    useEffect(() => {
        const initState = {}
        if (trip.checkList){
        trip.checkList.forEach(element => {
            initState[element.id] = element.completed
        });
        }
        setChecked(initState);
    }, []);

    const tripCopy = {...trip };
    
    const addItem = () => {
        if (!trip.checkList) tripCopy.checkList = [];
        const id = getId();
        tripCopy.checkList.push({ name: listItem, completed: false, id});
        actions.editTrip(tripCopy);
        setListItem('');

        const copy = {...checked};
        copy[id] = false;
        setChecked(copy);
    };

    const handleSelect = id => {
        const copy = {...checked};
        copy[id] = !checked[id];
        setChecked(copy);
    };


    const deleteItem = item => {
        const index = trip.checkList.indexOf(item);
        tripCopy.checkList.splice(index, 1);
        actions.editTrip(tripCopy);
    };

    const saveChanges = () => {
        tripCopy.checkList.map(c => c.completed = checked[c.id])
        actions.editTrip(tripCopy);
        navigation.navigate('TripDetail', {trip});
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Title 
                    title="Trip Essentials" 
                    style={{padding: 25}}/>
                <HeadingContainer>
                    <Icon 
                        name="clipboard-list"
                        size={30}
                        style={{color: "#3D83FF", padding: 10}}
                    />
                    <SubHeadingText>Things To Remember</SubHeadingText>
                </HeadingContainer>
                <CenteredView>
                    <FlatList
                        data={trip.checkList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => { 
                        return (
                            <View>
                                <CheckListItem 
                                    value={item.name}
                                    handler={() => { deleteItem(item)}}
                                    checkValue={checked[item.id]}
                                    checkHandler={() => handleSelect(item.id)}
                                    editable={false}
                                />
                            </View>
                        )}}
                        />
                    <ListItem 
                        placeholder="Add an item"
                        icon="plus"
                        value={listItem}
                        onChange={setListItem}
                        handler={addItem}
                    />
                </CenteredView>
            </ScrollView>
            <Footer>
                <Button
                    buttonText="Done" 
                    handler={saveChanges}
                    style={{width: 360}}
                />
            </Footer>
        </SafeAreaView>
    );
};

export default CheckListScreen;

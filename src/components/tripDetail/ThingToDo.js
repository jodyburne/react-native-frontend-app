import React, {useContext, useState, useEffect} from 'react';
import {View, FlatList} from 'react-native'
import RootContext from '../../RootContext';
import {getId} from '../../App';
import CheckListItem from '../ui/CheckListItem';
import ListItem from '../ui/ListItem';

const ThingToDo = ({data, placeIndex, tripCopy, thingToDo, state, callback}) => {
    const { actions } = useContext(RootContext);
    const [ checked, setChecked ] = useState({
        attractions: {},
        hotels: {},
        others: {},
        restaurants: {}
    });
    const thingsToDo = tripCopy.places[placeIndex].thingsToDo;

    useEffect(() => {
        const copy = {...checked};
        for (const property in thingsToDo) {
            thingsToDo[property].forEach(prop => 
            copy[property][prop.id] = prop.completed);
        };
        setChecked(copy)
        return () => {
            for (const property in thingsToDo) {
                thingsToDo[property].map(thing => thing.completed = checked[property][thing.id])
            };
            actions.editTrip(tripCopy);
        }
    }, []);

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
    };

    const handleSelect = (thingToDo, id) => {
        const copy = {...checked};
        copy[thingToDo][id] = !checked[thingToDo][id];
        setChecked(copy);
    };

    return (
        <View style={{alignItems: 'center', padding: 15, backgroundColor: '#FFFFFF'}}>
            <FlatList
                data={data[thingToDo]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => { 
                return (
                    <View>
                        <CheckListItem 
                            checkHandler={() => handleSelect(thingToDo, item.id)}
                            checkValue={checked[thingToDo][item.id]}
                            value={item.name}
                            handler={() => deleteItem(item)}/>
                    </View>
                    )}} />
            <ListItem 
                value={state}
                onChange={callback}
                placeholder="Add an item"
                icon="plus"
                handler={addItem}
                />
        </View>
    )
};

export default ThingToDo;

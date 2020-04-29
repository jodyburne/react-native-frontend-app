import React, {useState, useContext, useEffect} from 'react';
import {ScrollView, FlatList, SafeAreaView} from 'react-native';
import Button from '../components/ui/Button';
import RootContext from '../RootContext';
import {getId} from '../App';
import SearchBar from '../components/ui/SearchBar';
import Footer from '../components/ui/Footer';
import Title from '../components/ui/Title';
import ListItem from '../components/ui/ListItem';
import {Label} from '../components/ui/UserInput';
import {CenteredView, NoPlacesText, PlacesContainer} from './AddPlacesScreen';


const shadow = {
    textShadowColor: 'rgba(0,0,0,0.09)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
};

const PlacesBeenScreen = ({navigation}) => {
    const { state: {user}, actions } = useContext(RootContext);
    const [place, setPlace] = useState('');
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setPlaces(user.placesVisited)
    }, [])


    const handleSubmit = () => {
        setPlaces([...places, {
            name: place,
            id: getId(),
        }])
        setPlace('');
    };

    const handleDelete = id => {
        const copy = [...places];
        const filtered = copy.filter(p => p.id !== id);
        setPlaces(filtered);
    };


    return (
        <SafeAreaView style={{flex:1}}>  
            <CenteredView>
                <Title title="Add places you've been" />
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
                            keyExtractor={item => String(item.id)}
                            renderItem={({ item }) => { 
                            return (
                                <ListItem 
                                    icon="close"
                                    fontSize={{fontSize: 24}}
                                    value={item.name}
                                    editable={false}
                                    handler={() => handleDelete(item.id)}
                                />
                            )}} />
                        :  
                            <NoPlacesText>You haven't been anywhere</NoPlacesText>
                    }
                </ScrollView>
            </PlacesContainer>
            <Footer>
                <Button 
                    style={{width: 360}}
                    buttonText="Done"
                    handler={() => {
                        actions.addPlaces(places)
                        navigation.navigate('MyProfile')
                        }} />
            </Footer>
        </SafeAreaView>
    )
};

export default PlacesBeenScreen;

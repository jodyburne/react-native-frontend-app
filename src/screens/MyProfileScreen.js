import React, {useContext} from 'react';
import styled from 'styled-components';
import { Dimensions, Text, TouchableOpacity} from 'react-native';
import {GradientImage} from './MyTripsScreen';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import {Label} from '../components/ui/UserInput';
import Icon from 'react-native-vector-icons/AntDesign';
import RootContext from '../RootContext';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center; 
`;

const CentralContainer = styled.View`
    width: ${Dimensions.get('window').width - 60}px;
    flex: 1;
    margin: 20px 0;
    background-color: #FFFFFF;
    border-radius: 4px;
    justify-content: flex-start;
`;

const ProfilePic = styled.Image`
    width: 100%;
    height: 280px;
    opacity: 0.9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const Username = styled.Text`
    color: #3D83FF;
    font-size: 24px;
    margin-left: 20px;
`;

const UsernameContainer = styled.View`
    height: 60px;
    justify-content: center;
    background-color: #F9F9F9;
`;

const PlacesContainer = styled.View`
    margin: 20px;
`;

const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const MyProfileScreen = ({navigation}) => {
    const { state: {user} } = useContext(RootContext);
    let places = ''; 
    user.placesVisited.forEach(place => places += (`${place.name}, `))
    
    return (
        <Container>
            <GradientImage
                source={require('../assets/Rectangle.png')} />
            <CentralContainer style={{elevation: 1}}>
                <ProfilePic source={require('../assets/User_Review_3.jpg')} />
                <UsernameContainer>
                    <Username>{user.name}</Username>
                </UsernameContainer>
                <PlacesContainer>
                    <TitleContainer>
                        <Label>Places I've been</Label>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PlacesBeen')
                            }}>
                            <Icon 
                                style={{color: '#3D83FF'}}
                                name="plus" 
                                size={30} />
                        </TouchableOpacity>
                    </TitleContainer>
                        <Text>{places.substring(0, places.length - 2)}</Text>
                </PlacesContainer> 
            </CentralContainer>
            <Footer>
                <Button  
                    buttonText="Back" 
                    style={{width: 360}}
                    handler={() => {
                        navigation.navigate('MyTrips')
                    }}/>
            </Footer>
        </Container>
    )
};

export default MyProfileScreen;

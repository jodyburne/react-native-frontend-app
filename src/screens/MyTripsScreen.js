import React, {useContext} from 'react';
import { TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import TripsCard from '../components/myTrips/TripsCard';
import Button, {ButtonGroup} from '../components/ui/Button';
import Footer from '../components/ui/Footer';
import RootContext from '../RootContext';

const Container = styled.View`
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const GradientImage = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: 225px;
    z-index: -1;
    position: absolute;
    left: 0px;
    top: 0px;
`;

const Username = styled.Text`
    color: #3D83FF;
    font-size: 22px;
    font-family: 'Heebo-Regular';
`;

const ProfileContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    padding: 10px;
    width: 345px;
`;

const ProfilePic = styled.Image`
    height: 60px;
    width: 60px;
    border-width: 2px;
    border-color:  #FFFFFF;
    border-radius: 30px;
    margin-right: 10px;
`;

const shadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
};

const MyTripsScreen = ({navigation}) => {
    const { state: {user} } = useContext(RootContext);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
            <GradientImage
                source={require('../assets/Rectangle.png')} />
            <Container>
                <ProfileContainer>
                    <TouchableOpacity onPress={()  => navigation.navigate('MyProfile')}>
                        <ProfilePic source={require('../assets/User_Review_3.jpg')}/>
                    </TouchableOpacity>
                    {user && 
                        <Username 
                            style={shadow}
                            >{user.name}
                        </Username>}
                </ProfileContainer>
                <TripsCard />
            </Container>
            <Footer >
                <ButtonGroup>
                    <Button 
                        style={{width: 360}}
                        buttonText="Create Trip"
                        handler={() => navigation.navigate('AddTrip')} />
                </ButtonGroup>
            </Footer>
        </SafeAreaView>
    );
};

export default MyTripsScreen;

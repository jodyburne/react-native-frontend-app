import React, {useState} from 'react';
import Button, {ButtonGroup, CancelButton, DisabledButton} from '../components/ui/Button';
import styled from 'styled-components';
import UserInput, {Label} from '../components/ui/UserInput';
import Title from '../components/ui/Title';
import Duration from '../components/addTrip/Duration';
import Footer from '../components/ui/Footer';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding: 30px;
    background-color: #FFFFFF;
`;

const TitleContainer = styled.View`
    height: 90px;
    justify-content: center;
`;

const DurationContainer = styled.View`
    margin-top: 40px;
`;

const shadow = {
    textShadowColor: 'rgba(0,0,0,0.09)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
}
// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.09);

const AddTripScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <TitleContainer>
                <Title title="Create your trip" />
            </TitleContainer>   
            <Container style={shadow}>
                <UserInput 
                    handler={setName}
                    value={name}
                    placeholder="My Trip"
                    label="Trip" 
                />
                <DurationContainer>
                    <Label>Duration</Label>
                    <Duration 
                        startDate={startDate}
                        changeStart={setStartDate}
                        endDate={endDate}
                        changeEnd={setEndDate}
                    />
                </DurationContainer>
            </Container>
            <Footer style={{backgroundColor: '#FFFFFF'}}>
                <ButtonGroup>
                    <CancelButton 
                        buttonText="Back" 
                        handler={() => navigation.navigate('MyTrips')} />
                        { 
                            name ? 
                                <Button 
                                    buttonText="Next"
                                    handler={() => navigation.navigate('AddPlaces', {name, startDate, endDate})} />
                            : 
                                <DisabledButton 
                                    buttonText="Next" />
                        }
                </ButtonGroup>
            </Footer>
        </>
    )
};

export default AddTripScreen;

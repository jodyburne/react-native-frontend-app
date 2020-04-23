import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components';
import DatePickerContainer from '../../components/ui/DatePickerContainer';
import Button from '../../components/ui/Button';

import moment from 'moment';
import {
    Modal,
    Text,
    TouchableHighlight,
    View
  } from "react-native";

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 315px;
`;

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 4px;
    padding: 35px;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 240px;
`;


const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
}

const Duration = ({startDate, endDate, changeStart, changeEnd, style}) => {
    console.log(startDate)
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState({
        start: false,
        startValue: 'add a date',
        end: false,
        endValue: 'add a date'
    });
    
    const calcTripLength = (start, end) => {
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(end - start);
        return Math.round(differenceMs / ONE_DAY);
    
    }

    const handleDateChange = () => {
        if (date.start) 
            setDate({
                ...date,
                startValue: moment(startDate).format('L'),
                start: false,
            });   
        if (date.end)
            setDate({
                ...date,
                endValue: moment(endDate).format('L'),
                end: false,
            });           
    }

    const renderDisabledDuration = () => (
        <Container style={style}>
            <DatePickerContainer 
                header="Starting"
                value={moment(startDate).format('L')}
            />
        <View style={{marginTop: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>{calcTripLength(startDate, endDate)}</Text>
            <Text style={{color: '#FFFFFF'}}>days</Text>
        </View>
            <DatePickerContainer 
                header="Ending"
                value={moment(endDate).format('L')}
            />
        </Container>
        );

    return (
        <>
            {changeStart ? 
            <>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <CenteredView>
                        <ModalView style={shadow}>
                            { date.start ?
                            <DatePicker
                                date={startDate}
                                onDateChange={changeStart}
                                style={{height: 100, width: 280}}
                                mode="date"
                            />
                            :
                            <DatePicker
                                date={endDate}
                                onDateChange={changeEnd}
                                style={{height: 100, width: 280}}
                                mode="date"
                            /> }
                            <Button 
                                style={{width: 80}}
                                buttonText="Done"
                                handler={() => {
                                    handleDateChange()
                                    setModalVisible(!modalVisible);
                            }}/>
                        </ModalView>

                    </CenteredView>
                </Modal>
                <Container>
                <TouchableHighlight
                    onPress={() => {
                    setModalVisible(true)
                    setDate({...date, start: true});
                    }}
                >
                    <DatePickerContainer 
                        value={date.startValue}
                        header="Starting"/>
                </TouchableHighlight>
                <View>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>{calcTripLength(startDate, endDate)}</Text>
                    <Text>days</Text>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    setModalVisible(true);
                    setDate({...date, end: true});
                    }}>
                    <DatePickerContainer 
                        header="Ending"
                        value={date.endValue}
                    />
                </TouchableHighlight>
            </Container>
            </> :
            renderDisabledDuration(startDate, endDate)
            }
        </>
    );
};


export default Duration;

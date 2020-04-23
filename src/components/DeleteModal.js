import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from './ui/Button';

const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ModalView = styled.View`
    height: 332px;
    width: 345px;
    border-radius: 6px;
    background-color: #FFFFFF;
    align-items: center;
`;

const HeaderText = styled.Text`
    color: #40403D;
    font-size: 22px;
    font-weight: bold;
`;

const MainText = styled.Text`
    color: #40403D;
    font-size: 18px;
    text-align: center;
`;

const SmallPrint = styled.Text`
    color: #40403D;
    font-size: 12px;
    text-align: center;
`;

const Footer = styled.View`
    height: 64px;
    width: 345px;
    border-top-color: #D8D8D8;
    border-top-width: 1px;
    justify-content: center;
`;

const CancelButton = styled.TouchableOpacity`
    height: 48px;
    width: 158px;
    border-radius: 4px;
    background-color: #FFFFFF;
    justify-content: center;
    border: 1px solid #0084FF;
`;

const CancelButtonText = styled.Text`
    color: #0084FF;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
`;

const DeleteModal = ({cancelHandler, removeHandler}) => {

    return (

        <CenteredView>
            <ModalView>
                <>
                <CenteredView>
                    <Icon 
                        name="delete"
                        size={30}
                        color="#3D83FF"
                    />
                    <HeaderText>Vietnam</HeaderText>
                </CenteredView>
                <CenteredView style={{width: 260}}>
                    <MainText>Are you sure you want to remove this Trip?</MainText>
                </CenteredView>
                <CenteredView style={{width: 260}}>
                    <SmallPrint>By removing your trip you are also removing the list of places related to it.</SmallPrint>
                </CenteredView>
                </>
                <Footer>
                    <ButtonGroup>
                        <CancelButton
                            onPress={cancelHandler}>
                            <CancelButtonText>Cancel</CancelButtonText>
                        </CancelButton>
                        <Button 
                            handler={removeHandler}
                            style={{height: 48, width: 158 }}
                            buttonText="Remove"/>
                    </ButtonGroup>
                </Footer>
            </ModalView>
        </CenteredView>
    );
};

export default DeleteModal;

import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import Button, {CancelButton} from './ui/Button';

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

const LinkContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center; 
    justify-content: center;
    margin: 15px;
`;

const DeleteText = styled.Text`
    font-size: 12px;
    text-decoration: underline;
    margin-left: 5px;
`;

export const OpenModalLink = ({handler, text, color}) => {
    return (
        <LinkContainer
        onPress={handler}
        style={{}}>
            <Icon 
                name="delete"
                size={25}
                color={color || "#FFFFFF"}
            />
            <DeleteText
                style={{color: color || "#FFFFFF" }}
            >{text}</DeleteText>
        </LinkContainer>
    )
}

const DeleteModal = ({cancelHandler, removeHandler, title, mainText, smallPrint}) => {

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
                    <HeaderText>{title}</HeaderText>
                </CenteredView>
                <CenteredView style={{width: 260}}>
                    <MainText>{mainText}</MainText>
                </CenteredView>
                <CenteredView style={{width: 260}}>
                    <SmallPrint>{smallPrint}</SmallPrint>
                </CenteredView>
                </>
                <Footer>
                    <ButtonGroup>
                        <CancelButton
                            handler={cancelHandler}
                            text="Cancel">
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

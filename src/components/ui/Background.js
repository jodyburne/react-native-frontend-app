import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';

const CurvedHeader = styled.View`
    /* position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    height: 226px;
    width: 100%; */
    /* background-color: linear-gradient(0deg, #E99F0A 0%, #FFCC00 64.76%, #FFDA47 100%); */
`;

const Background = () => (
    <View style={styles.background}>
    {/* <View style={styles.container} >
        <View style={styles.background} >
            <CurvedHeader style={styles.image} />
        </View>
  </View> */}
  </View>
);

const styles = {
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -100,
        height: '100%',
        width: '100%',
        backgroundColor: 'yellow',
        borderColor: 'red',
        borderWidth: 1

    },
    container: {
      alignSelf: 'center',
      width: 400,
      overflow: 'hidden', // for hide the not important parts from circle
      height: 226,
    },
    background: { // this shape is a circle 
      borderRadius: 600, // border borderRadius same as width and height
      width: 800,
      height: 800,
      marginLeft: -200, // reposition the circle inside parent view
      position: 'absolute',
      bottom: 0, // show the bottom part of circle
      overflow: 'hidden', // hide not important part of image
    },
    image: {
      height: 226, // same width and height for the container
      width: 400,
      position: 'absolute', // position it in circle
      bottom: 0, // position it in circle
      marginLeft: 200, // center it in main view same value as marginLeft for circle but positive
    }
  }

export default Background;

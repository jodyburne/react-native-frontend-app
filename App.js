

import React, {useState, useEffect} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyTripsScreen from './src/screens/MyTripsScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import PlacesBeenScreen from './src/screens/PlacesBeenScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import AddPlacesScreen from './src/screens/AddPlacesScreen';
import ThingsToDoScreen from './src/screens/ThingToDoScreen';
import CheckListScreen from './src/screens/CheckListScreen';
import createApp, {initState} from './src/App';
import flyd from 'flyd';
import merge from 'mergerino'
import RootContext from './src/RootContext';
import { setNavigator } from './src/navigationRef';

const { states, actions } = createApp(flyd, merge, initState);

const navigator = createStackNavigator({
    MyTrips: {
      screen: MyTripsScreen,
      navigationOptions: {
        title: 'My trips',
        headerTitleAlign: 'center'
      }
    },
    MyProfile: {
      screen: MyProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerLeft: () => null,
        headerTitleAlign: 'center'
      }
    },
    TripDetail: {
      screen: TripDetailScreen,
      navigationOptions: {
        title: 'My trips',
        headerLeft: () => null,
        headerTitleAlign: 'center'
      }
    },
    PlacesBeen: {
      screen: PlacesBeenScreen,
      navigationOptions: {
        title: 'Places I\'ve been',
        headerLeft: () => null,
        headerTitleAlign: 'center'
      }
    },
    AddTrip: {
      screen: AddTripScreen,
      navigationOptions: { 
        title: 'Add Trip',
        headerLeft: () => null,
        headerTitleAlign: 'center'
      }
    },       
    AddPlaces: {
      screen: AddPlacesScreen,
      navigationOptions: { 
        title: 'Add Trip',
        headerLeft: () => null,
        headerTitleAlign: 'center'
      }
    },
    ThingsToDo: {
      screen: ThingsToDoScreen,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
        headerLeft: () => null,
        headerTitleAlign: 'center'
      })
    },
    CheckList: {
      screen: CheckListScreen,
      navigationOptions: { 
        title: 'Check List',
        headerLeft: () => null,
        headerTitleAlign: 'center'
    }}, 
  },{
  initialRouteName: 'MyTrips',
  defaultNavigationOptions: {
    title: 'My Trips'
  }
});


const AppNavigator = createAppContainer(navigator);

const App = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    states.map(s => setState(s));
  }, [])
  return (
    <RootContext.Provider value={{state, actions}}>
      <AppNavigator ref={navigator => { setNavigator(navigator) }}/>
    </RootContext.Provider>
  )};

export default App;

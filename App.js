

import React, {useState, useEffect} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyTripsScreen from './src/screens/MyTripsScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import PlacesScreen from './src/screens/PlacesScreen';
import ThingsToDoScreen from './src/screens/ThingToDoScreen';
import CheckListScreen from './src/screens/CheckListScreen';
import createApp, {initState} from './src/App';
import flyd from 'flyd';
import merge from 'mergerino'
import RootContext from './src/RootContext';
import { setNavigator } from './src/navigationRef';

const { states, actions } = createApp(flyd, merge, initState);

const navigator = createStackNavigator({
    MyTrips: MyTripsScreen,
    MyProfile: MyProfileScreen,
    TripDetail: TripDetailScreen,
    AddTrip: {
      screen: AddTripScreen,
      navigationOptions: { 
        title: 'Add Trip',
    }},       
    Places: {
      screen: PlacesScreen,
      navigationOptions: { 
        title: 'Add Trip',
    }},
    ThingsToDo: ThingsToDoScreen,
    CheckList: {
      screen: CheckListScreen,
      navigationOptions: { 
        title: 'Check List',
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

export default App
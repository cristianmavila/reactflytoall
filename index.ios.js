import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Home from './components/Home';
import { StackNavigator } from 'react-navigation';
import Account from './components/Account';
import Register from './components/Register';
import Tickets from './components/Tickets';
import FlightList from './components/FlightList';

class flytoall extends Component {
  render() {
      const { navigation } = this.props;
      return (
        <Home navigation={navigation} />
      );
  }
}

const flytoAllApp = StackNavigator({
  Home: { screen: Home },
  Account: { screen: Account },
  Register: { screen: Register },
  Tickets: { screen: Tickets },
  FlightList: { screen: FlightList }
});

AppRegistry.registerComponent('flytoall', () => flytoAllApp);

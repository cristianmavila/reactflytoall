import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003E87',
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  logo: {
    width: 295,
    height: 62,
    marginBottom: 20
  },
  buttonText: {
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
  button: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 3,
    width: 300,
    height: 40,
    margin: 5
  },
});

const Home = (props) => {
  const { navigate } = props.navigation;
  return (
    <Image style={styles.container} source={require('../assets/background_intro.png')}>
      <Image style={styles.logo} source={require('../assets/logo_white.png')} />
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Account')}>
        <Text
          style={styles.buttonText}>
          MINHA CONTA
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Register')}>
        <Text
          style={styles.buttonText}>
          REGISTRE-SE
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigate('Tickets')}>
          PASSAGENS AÉREAS
        </Text>
      </TouchableHighlight>
    </Image>
  );
}

Home.navigationOptions = {
  title: 'Inicial',
  header: null
}

export default Home

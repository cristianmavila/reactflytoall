import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
//import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#143862'
  },
  container__inner: {
    padding: 20
  },
  container__center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginBottom: 10,
    padding: 0,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF'
  },
  icon: {
    width: 100,
    height: 100
  },
  input: {
    marginBottom: 10,
    color: '#000000',
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 3
  },
  button: {
    height: 36,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#FFFFFF',
    backgroundColor: '#143862'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 4
  }
});

const Account = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.container__inner}>
        <View style={styles.container__center}>
          <Image style={styles.icon} source={require('../assets/icon_myaccount.png')} />
        </View>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
        />
        <TouchableHighlight
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableHighlight>
      </View>
    </View>
  );
}

Account.navigationOptions = {
  title: 'Minha conta'
}

export default Account

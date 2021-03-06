import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Item,
  Image,
  TouchableHighlight
} from 'react-native';

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

const Register = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.container__inner}>
        <View style={styles.container__center}>
          <Image style={styles.icon} source={require('../assets/icon_myaccount.png')} />
        </View>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.label}>E-mail</Text>
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

Register.navigationOptions = {
  title: 'Registre-se'
}

export default Register

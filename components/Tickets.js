import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143862'
  },
  container__inner: {
    padding: 20
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

const Tickets = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container__inner}>
        <Text style={styles.label}>Origem</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.label}>Destino</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.label}>Data ida</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.label}>Data de volta</Text>
        <TextInput
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('FlightList')}>
          <Text
            style={styles.buttonText}>
            Pesquisar
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

Tickets.navigationOptions = {
  title: 'Tickets'
}

export default Tickets

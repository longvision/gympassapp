import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
  StatusBar
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    headerStyle: {
      backgroundColor: '#48285b',
      marginTop: 0
    },
    headerTintColor: '#fff'
  };
  handleStart = async () => {
    const { navigate } = this.props.navigation;
    navigate('Gyms');
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <Text style={styles.welcome}>Bem-vindo ao GympassApp!</Text>
        <Text style={styles.subtitle}>
          Versão 1.0 para recrutamento de processo seletivo da GymPass.
        </Text>

        <Text style={styles.subtitle}>
          Esse App foi desenvolvido por Ricardo Naoki Horiguchi.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20
  },
  button: {
    height: 44,
    width: 120,
    marginTop: 50
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center'
  },
  subtitle: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center'
  },
  logo: {
    height: Dimensions.get('window').height * 0.15,
    marginVertical: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').height * 0.15 * (1950 / 662)
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

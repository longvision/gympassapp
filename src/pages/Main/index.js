import React, { Component } from 'react';

import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as GymsActions from '../../store/actions/gyms';

// import { Container } from './styles';

export default class Main extends Component {
  handleStart = async () => {
    const { navigate } = this.props.navigation;
    navigate('Gyms');
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png'
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Image
          source={{
            uri:
              'https://dtda4cv2md3ne.cloudfront.net/image/filename/281513/Novo_logo_GP.png'
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcome}>Bem-vindo ao GympassApp!</Text>
        <Text style={styles.subtitle}>
          Versão 1.0 para recrutamento de processo seletivo da GymPass.
        </Text>

        <Text style={styles.subtitle}>
          Esse App foi desenvolvido por Ricardo Naoki Horiguchi.
        </Text>
      </ImageBackground>
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

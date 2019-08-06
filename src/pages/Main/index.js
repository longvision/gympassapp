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

// import { Container } from './styles';

export default class Main extends Component {
  handlePress = () => {};
  render() {
    const { navigate } = this.props.navigation;
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
          Selecione a atividade que você quer praticar hoje.
        </Text>
        <View style={styles.button}>
          <Button
            title="Começar"
            color="#48285b"
            onPress={() => navigate('Gyms')}
          />
        </View>
      </ImageBackground>
    );
  }
}

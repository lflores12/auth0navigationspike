import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainView from './MainView'
 
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  
  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
        require('./assets/keyFullBlack.png'),
        require('./assets/splash.png')
      ]),
      Font.loadAsync({
        'ArchivoNarrow': require('./assets/fonts/Archivo_Narrow/ArchivoNarrow-Regular.ttf'),
        'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
      }),
    ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator
          onNavigationStateChange={console.log('changed')}
          uriPrefix='/app'
          />
        </View>
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const AuthStack = createStackNavigator({
  MainView: MainView
})

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
))
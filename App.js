import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';
//import AppNavigator from './navigation/AppNavigator';
//import TestNav from './screens/TestNav';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component{

  constructor(props)
  { super(props);
    this.state = { isLoadingComplete: false,
                  
  };

  if (!firebase.apps.length){firebase.initializeApp(ApiKeys.FirebaseConfig );}
  

 }


render()
{
  if (!this.state.isLoadingComplete  && !this.props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        {  <AppNavigator/> }
        
      </View>
    );
  }

}


_loadResourcesAsync = async () => {
  return Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      
      ...Ionicons.font,
      
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
};

_handleLoadingError = error => {

  console.warn(error);
};

_handleFinishLoading = () => {
  this.setState({ isLoadingComplete: true });
};
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
statusBarUnderlay: {
  height: 24,
  backgroundColor: 'rgba(0,0,0,0.2)',
},
});


  


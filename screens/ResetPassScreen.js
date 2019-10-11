import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
import firebase from 'firebase';



export default class ResetPassScreen extends React.Component{

  render()
  {
  return (
    <View style= {styles.container}>
      
      <Text> change your password here </Text>
        <Button title= "Let's assume u changed ur password" onPress={() => this.props.navigation.navigate('Login')}
        /> 
    </View>
  );
}
}
//ResetPassScreen.navigationOptions = {
  //title: 'ResetPassword',
//};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
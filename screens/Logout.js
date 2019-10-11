
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase';


export default class Logout extends React.Component{

    state = { email: '', 
    password:'', errorMessage:null
  }


  LogoutButtonPress = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message }));
    };
    
    render ()
    {   return (
  
         <View style={styles.container}>
          <Text>LogOut</Text>
          <Button title="LogOut" onPress={this.LogoutButtonPress} />
          </View>
           );
    }



}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
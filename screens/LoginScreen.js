//import React from 'react';
//import { StyleSheet, Text, ScrollView,Alert } from 'react-native';
//import {Container, Content, Form, Label, Item , Input, Button } from 'native-base'; 
//import firebase from 'firebase';



import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';

export default class LoginScreen extends React.Component {


  //state = { email: ' ', password: ' ', errorMessage: null }
  state = { username: '', password: '', errorMessage: null }



  LoginButtonPress = () => {
    //const { email, password } = this.state
    //firebase
    //.auth()
    //.signInWithEmailAndPassword(email.trim(), password)
    // .then(() => this.props.navigation.navigate('MainTabNavigator'))
    //.catch(error => this.setState({ errorMessage: error.message }))


    const payload = { username: this.state.email, password: this.state.password }
    axios
      .post(`http://127.0.0.1:8000/auth/login`, payload)
      .then(response => {
        const { token, user } = response.data;

        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;

      })
      .then(() => this.props.navigation.navigate('MainTabNavigator'))
      .catch(error => console.log(error));

  }


  render() {

    return (


      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.LoginButtonPress} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />

        <Button
          title="Forgot Password"
          onPress={() => this.props.navigation.navigate('Reset')}
        />
      </View>












    );


  }

}



LoginScreen.navigationOptions = {
  title: 'LoginScreen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
});




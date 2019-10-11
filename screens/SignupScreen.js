


import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase';


export default class SignupScreen extends React.Component{

  state = { email: '', 
  password:'', errorMessage:null
}




//handleSignUp = () => {
//   const {email, password} =this.state
 // firebase
  ///  .auth()
   // .createUserWithEmailAndPassword(this.state.email, this.state.password)
   // .then(() => this.props.navigation.navigate('Main'))
   // .catch(error => this.setState({ errorMessage: error.message }))
//}



 SignUpButtonPress= () => 
 {
      const {email, password} =this.state
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Login'))

      .catch(error => this.setState({ errorMessage: error.message }))

 }
  
  render ()
  {
  return (


    <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.SignUpButtonPress} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>













    /*
    <ScrollView>
    <Container style = {styles.container}>
         <Content>
           <Form>
              <Item floatingLabel>
                <Label> Email Address</Label>
                <Input placeholder = "Myemail"autoCapitalize = "none" autoCorrect ={false} onChangeText ={email =>this.setState({email})} 
                value ={this.state.email}/>
                </Item>
                
                <Item floatingLabel>
                <Label> Password</Label>
                <Input placeholder = "Mypassword" secureTextEntry = {true} onChangeText ={password=>this.setState({password})}
                value = {this.state.password}/>
              </Item>
              <Button success info onPress = {this.SignUpButtonPress}>
                <Text> SignUp </Text>

              </Button>
              <Button success info onPress = {this.props.navigation.navigate('LoginScreen')}>
                <Text> Already have an account? </Text>

              </Button>
            

           </Form>
        </Content>
    </Container>
      
    </ScrollView>
    */
);
}

}
SignupScreen.navigationOptions = {
  title: 'SignUpScreen',
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


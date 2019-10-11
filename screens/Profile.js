import React from 'react';
import {Text, View, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default function Profile() {
  return(
    <ScrollView>
    <View>
   
    <Text> Let's have all profile functionality here, including LogOut </Text>
    
    </View>
    </ScrollView>
  );

}
Profile.navigationOptions = {
  title: 'My Profile',
};


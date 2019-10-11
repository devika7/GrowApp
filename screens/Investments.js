import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default function Investments() {
  return (
    <ScrollView style= {styles.container}>
      {
        <Text> This page will have all the investments you are invested i, followed by news related to it. </Text>

      }
      
    </ScrollView>
  );
}

Investments.navigationOptions = {
  title: 'Your Investments',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

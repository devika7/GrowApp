//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function Portfolio() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}
        contentContainerStyle= {styles.contentContainer}>
         <View>
          <Text style={styles.getStartedText}> Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.PortfolioFilename]}>
            <MonoText>screens/Portfolio.js</MonoText>
          </View>

          <Text style={styles.getStartedText} >
            This is where all of our portfolios will come
          </Text>
        </View>

        
      </ScrollView>
    </View>
  );
}
Portfolio.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  PortfolioFilename: {
    alignItems: 'center',
    marginVertical: 15,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  
  navigationFilename: {
    marginTop: 5,
  },
  
  
});

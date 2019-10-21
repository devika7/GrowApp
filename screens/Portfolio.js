//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, Alert } from 'react-native';
//import { MonoText } from '../components/StyledText';

export default class Portfolio extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Portfolio",
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      PortfolioSource: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/portfolios/")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          PortfolioSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  }




  //goToNextScreen = () => {
  //this.props.navigation.navigate('Details');
  //  this.props.navigation.push('Details', { portid: data.item.id })

  //}

  renderItem = (data) =>
    <TouchableOpacity style={styles.list} onPress={() => this.props.navigation.push('Details', { portid: data.item.id })} >
      <Text style={styles.lightText}>{data.item.id}</Text>
      <Text style={styles.lightText}>{data.item.portfolio_id}</Text>
      <Text style={styles.lightText}>{data.item.name}</Text>
      <Text style={styles.lightText}>{data.item.description}</Text>
      <Text style={styles.lightText}>{data.item.gains}</Text></TouchableOpacity>

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.PortfolioSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}

        />

      </View>
    )
  }

}














/*  return ( <View style={styles.container}>
      <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
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
  */






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
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },

  navigationFilename: {
    marginTop: 5,
  },


});



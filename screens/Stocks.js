import React from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, Button, Card } from 'react-native';


export default class Stocks extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Stocks",
            header: null,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            Stocks: []
        };
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/stocks/?portfolioid=${this.props.navigation.state.params.portid}`)
            .then(response => response.json())
            .then((responseJson) => {

                this.setState({
                    loading: false,
                    Stocks: responseJson
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

    goToPrevScreen = () => {
        this.props.navigation.goBack();
    }

    buyPortfolio = () => {

    }


    renderItem = (data) =>
        <TouchableOpacity style={styles.list}  >
            <Text style={styles.lightText}>{data.item.id}</Text>
            <Text style={styles.lightText}>{data.item.ticker}</Text>
            <Text style={styles.lightText}>{data.item.price}</Text>
            <Text style={styles.lightText}>{data.item.YTD}</Text>
        </TouchableOpacity>

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
                    data={this.state.Stocks}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}

                />
                <Button
                    onPress={() => this.buyPortfolio()}
                    title="Buy Portfolio"
                />
                <Button
                    onPress={() => this.goToPrevScreen()}
                    title="go back to Portfolio"
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



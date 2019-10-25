import React from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, Button } from 'react-native';


export default class PortfolioDetails extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "PortfolioDetails",
            header: null,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            PortfolioDetailsdataSource: [],

        };

    }




    componentDidMount() {


        fetch(`http://127.0.0.1:8000/stocks/?portfolioid=${this.props.navigation.state.params.portid}`)
            .then(response => response.json())
            .then((responseJson) => {
                //this.setState({
                //  loading: false,
                // PortfolioDetailsdataSource: responseJson
                console.log(responseJson);
                this.setState({
                    loading: false,
                    // portfolioDetailsDataSource: responseJson.filter(responseJson => contains(responseJson.portfolio) === this.props.navigation.state.params.portid)

                    portfolioDetailsDataSource: responseJson

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


    renderItem = (data) =>

        <TouchableOpacity style={styles.list}>

            <Text style={styles.lightText}>{data.item.id}</Text>
            <Text style={styles.lightText}>{data.item.ticker}</Text>
            <Text style={styles.lightText}>{data.item.price}</Text>
            <Text style={styles.lightText}>{data.item.market_cap}</Text>
            <Text style={styles.lightText}>{data.item.YTD}</Text>
            <Text style={styles.lightText}>{data.item.OneYear}</Text>
            <Text style={styles.lightText}>{data.item.TwoYear}</Text>


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

                    data={this.state.PortfolioDetailsdataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}


                />




                <Text> portid: {this.props.navigation.state.params.portid} </Text>

                <Button
                    onPress={() => this.goToPrevScreen()}
                    title="go back to Portfolio"
                />
            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});

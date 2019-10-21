import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, Button, Alert, console } from 'react-native';
import axios from 'axios';


export default class PortfolioDetails1 extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "PortfolioDetails",
            header: null,
        };
    };

    state = {
        stocks: [],
        isLoading: true,
        errors: null
    };


    getStocks() {


        axios.get("http://127.0.0.1:8000/stocks/")

            .then(response => {

                this.setState({


                    stocks: response.filter(item => item.portfolio.find(p => p === portid)),
                    isLoading: false
                });
                console.log(response.filter(item => item.portfolio.find(p => p === portid)))

            })
            //  .then(response => {
            //    response.data.portfolio === this.props.navigation.state.params.portid
            //   this.setState({
            //       stocks: response.data,
            //      isLoading: false
            //  });
            //   })
            .catch(error => this.setState({ error, isLoading: false }));

    }





    componentDidMount() {
        this.getStocks();
    }


    goToPrevScreen = () => {
        this.props.navigation.goBack();
    }



    render() {

        // Alert.alert(this.state.PortfolioDetailsdataSource.portfolio);

        const { isLoading, stocks } = this.state;


        return (

            <View>
                <Text>Stocks in this portfolio</Text>

                {!isLoading ? (
                    stocks.map(stock => {
                        const { id, ticker, price, market_cap, portfolio } = stock;
                        return (
                            <View key={id}>
                                <Text>  {ticker}</Text>
                                <Text>  {price} </Text>
                                <Text>   {market_cap} </Text>
                                <Text>   {portfolio} </Text>
                            </View>
                        );
                    })
                ) : (
                        <Text>Loading...</Text>
                    )}

            </View>


        )


    }
}


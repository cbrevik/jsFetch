import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Core extends Component {
    state = {
        done: "Not done"
    }

    componentDidMount() {
        fetch('https://github.com/facebook/react-native')
            .then((res) => res.text())
            .then(this.handleResult.bind(this));
    }

    handleResult(res) {
        console.log(res);
        this.setState({ done: 'Done :D' });
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.done}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// destructure Header from index.js, default will enter index.js
import { Header } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;
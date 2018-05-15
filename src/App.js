import React, { Component } from 'react';
import { View, Text } from 'react-native';
// destructure Header from index.js, default will enter index.js
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {

    componentWillUnmount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyCh_0680CDSze8SbjDvJA6zW35mXWW--y0',
                authDomain: 'authentication-e5391.firebaseapp.com',
                databaseURL: 'https://authentication-e5391.firebaseio.com',
                projectId: 'authentication-e5391',
                storageBucket: 'authentication-e5391.appspot.com',
                messagingSenderId: '912735790731'
              }
        );
    }

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
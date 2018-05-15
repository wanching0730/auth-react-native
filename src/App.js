import React, { Component } from 'react';
import { View } from 'react-native';
// destructure Header from index.js, default will enter index.js
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return <Button>Log out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
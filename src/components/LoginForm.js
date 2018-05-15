import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardItem, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            // if sign in fail, let user to sign up
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Authentication failed!' });
            })
        })

    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label="Password"
                        // set as True
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                     />
                </CardItem>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
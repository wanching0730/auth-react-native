import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { email: '', password: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
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

                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm;
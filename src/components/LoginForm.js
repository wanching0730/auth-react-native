import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {

    state = { text: '' };

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                     />
                </CardItem>
                <CardItem />

                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm;
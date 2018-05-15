import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// destructuring the variable "onPress" and "children" from props
const Button = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        // One of the button type on react native
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}> 
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, 
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }, 
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', // degree of bold
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
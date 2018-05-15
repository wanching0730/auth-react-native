import React from 'react';
import { Text, View } from 'react-native';

// Functional Component
const Header = (props) => {

    // using Destructuring to avoid repeating "styles"
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>;
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 30
    },

    viewStyle: {
        backgroundColor: '#F8F8F8', 

        //FlexBox (horizontal and vertical alignment)
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;
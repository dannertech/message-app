import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return(
        <View style={styles.mainView}>
            <Text style={styles.headerTextStyle}>Chat</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 70,
        backgroundColor: '#0ABAB5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    }
});

export default Header;
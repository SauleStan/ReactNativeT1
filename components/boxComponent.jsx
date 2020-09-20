import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxComponent = ({ color, text }) => {
    return(
        <View style={[styles.box, {backgroundColor: color}]}>
            <Text style={styles.boxText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor:'crimson',
        padding: 30,
        paddingRight:40,
        paddingLeft: 40,
      },
      boxText: {
        fontWeight: 'bold',
      },
});

export default BoxComponent;
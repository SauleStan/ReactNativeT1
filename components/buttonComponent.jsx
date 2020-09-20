import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        borderWidth: 8,
        borderColor: 'lime',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,   
    },
    buttonText: {
        fontWeight: 'bold',
    }
})

export default AppButton;
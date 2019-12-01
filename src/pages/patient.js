import React from 'react';
import { SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png'
import PatientList from '../components/PatientList';

export default function Patient({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <PatientList navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 48,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40
    }
})
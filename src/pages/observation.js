import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import logo from '../../assets/logo.png'

export default function Observation() {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text>Observação do Paciente</Text>
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
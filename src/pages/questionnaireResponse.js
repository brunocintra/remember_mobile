import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

import logo from '../../assets/logo.png'

export default function QuestionnaireResponse() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text>Questionário do Paciente</Text>
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
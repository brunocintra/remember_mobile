import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import logo from '../../assets/logo.png';
import ObservationList from '../components/ObservationList';

export default function Observation({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ObservationList navigation={ 1, navigation}  />
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
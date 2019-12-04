import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';

import logo from '../../assets/logo.png'
import ConditionList from '../components/ConditionList';

export default function Condition({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ConditionList navigation={navigation}  />
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
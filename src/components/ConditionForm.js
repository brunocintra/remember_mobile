import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'; 

export default function ConditionForm({ condition, patientId }){

    const apiVersion = '4_0_0';
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        async function loadConditions(){
            const response = await api.get('4_0_0/Condition');
            setConditions(response.data);
        }
        console.log(condition);
        loadConditions();
    }, [])

    function handleConfirm(){
        navigation.navigate('Condition');
    }

    function handleCancel(){
        navigation.navigate('Condition');
    }   

    return (
        <ScrollView>
            <View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    card: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        overflow: "hidden",
        margin: 30,
        alignItems: "flex-start",
        height: 70,

    },
    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    normalText: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 15,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginBottom: 30,

    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        elevation: 2
    }
});
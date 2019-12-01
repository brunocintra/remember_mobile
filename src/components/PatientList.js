import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'; 

import patientIcon from '../../assets/patient-icon.png';
import iconObservation from '../../assets/icon-observation.png'
import iconHistory from '../../assets/icon-history.png'
import iconQuestion from '../../assets/icon-question.png'
import iconCondition from '../../assets/icon-condition.png'

export default function PatientList({ navigation }){
    
    function handleObservation(){
        navigation.navigate('Observation');
    }

    function handleCondition(){
        navigation.navigate('Condition');
    }

    function handleFamilyMemberHistory(){
        navigation.navigate('FamilyMemberHistory');
    }
    
    function handleQuestionnaireResponse(){
        navigation.navigate('QuestionnaireResponse');
    }

    const apiVersion = '3_0_1';
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function loadPatients(){
            const response = await api.get('3_0_1/Patient');
            setPatients(response.data);
        }

        loadPatients();
    }, [])
    
    return (
        <ScrollView>
            <View>
                { patients.map((patient, index) => (
                    <View style={styles.card} key={patient.id}  >
                        <Image source={patientIcon} style={styles.patientIcon} />
                        <View style={styles.footer}>
                            <Text style={styles.footerName} > {patient.name[0].given[0]} {patient.name[0].family} </Text>
                            <Text style={styles.footerIdade}> {patient.birthDate} </Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleObservation}>
                                <Image source={iconObservation} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleFamilyMemberHistory}>
                                <Image source={iconHistory} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleCondition}>
                                <Image source={iconCondition} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleQuestionnaireResponse}>
                                <Image source={iconQuestion} />
                            </TouchableOpacity>
                        </View>
                    </View>

                ))}
                
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
    cardsContainer: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        maxHeight: 580
    },
    card: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        overflow: "hidden",
        margin: 30,
        alignItems: "center",
        height: 400,
    },
    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    patientIcon: {
        flex: 1,
        width: 240,
        resizeMode: "contain"
    },
    footerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    footerIdade: {
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
        width: 70,
        height: 70,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        elevation: 2
    }
});
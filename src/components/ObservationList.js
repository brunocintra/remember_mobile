import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Moment from 'moment';

import api from '../services/api';
import deleteIcon from '../../assets/ic_delete.png';

export default function ObservationList({ patientId, navigation }){

    const apiVersion = '4_0_0';
    const [observations, setobservations] = useState([]);

    async function loadobservations(){
        const response = await api.get('4_0_0/Observation');
        setobservations(response.data);
    }

    async function deleteObservation(observationId) {
        const response = await api.delete(`4_0_0/Observation/${observationId}`);
    }

    useEffect(() => {
        loadobservations();
    }, [])

    function handleInsert(patientId){
        navigation.navigate('ObservationForm', { patientId: patientId });
    }

    function handleEdit(observation){
        //navigation.navigate('ObservationForm', { observation: observation, patientId: patientId, navigation: navigation });
    }

    function handleDelete(observationId){
        deleteObservation(observationId);
        loadobservations();
    }    

    return (
        <ScrollView>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleInsert}>
                        <Text style={styles.buttonText}>Create Record</Text>
                    </TouchableOpacity>
                </View>

                { observations.map((observation, index) => (
                    <View style={styles.card} key={observation.id}  >
                        <View style={styles.footer}>
                            <TouchableOpacity onPress={() => handleEdit(observation)}>
                                <Text style={styles.boldText}> { observation.code.text}</Text>
                                <Text style={styles.normalText}> { Moment(observation.effectiveDateTime).calendar() }</Text>
                                <Text style={styles.normalText}> { observation.interpretation.text}</Text>
                                
                                <Text style={styles.boldText}>{ observation.component[0].code.coding[0].display }</Text>
                                <Text style={styles.boldText}> 
                                    { `${observation.component[0].valueQuantity.value} ${observation.component[0].valueQuantity.unit} X ${observation.component[1].valueQuantity.value} ${observation.component[1].valueQuantity.unit}`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => handleDelete(observation.id)}>
                                <Image source={deleteIcon} /> 
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
    card: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        overflow: "hidden",
        margin: 30,
        alignItems: "flex-start",
        height: 150,
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
    },
    buttonAdd: {
        height: 46,
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250
    },
    buttonAddText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    }
});
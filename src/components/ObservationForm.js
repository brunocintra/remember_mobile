import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'; 
import logo from '../../assets/logo.png';

export default function ObservationForm({ observation, patientId, navigation }){

    const [ systolic, setSystolic ] = useState('');
    const [ diastolic, setDiastolic ] = useState('');
    const apiVersion = '4_0_0';

    async function handleConfirm(){
        const data = {
            "resourceType": "Observation",
            "meta": {
              "profile": [
                "http://hl7.org/fhir/StructureDefinition/vitalsigns"
              ]
            },
            "text": {
              "status": "generated",
              "div": ""
            },
            "identifier": [
              {
                "system": "urn:ietf:rfc:3986",
                "value": "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
              }
            ],
            "basedOn": [
              {
                "identifier": {
                  "system": "https://acme.org/identifiers",
                  "value": "1234"
                }
              }
            ],
            "status": "final",
            "category": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "vital-signs",
                    "display": "Vital Signs"
                  }
                ]
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "85354-9",
                  "display": "Blood pressure panel with all children optional"
                }
              ],
              "text": "Blood pressure systolic & diastolic"
            },
            "subject": {
              "reference": patientId
            },
            "effectiveDateTime": "2012-09-17",
            "performer": [
              {
                "reference": "Practitioner/example"
              }
            ],
            "interpretation": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                    "code": "L",
                    "display": "low"
                  }
                ],
                "text": "Below low normal"
              }
            ],
            "bodySite": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "368209003",
                  "display": "Right arm"
                }
              ]
            },
            "component": [
              {
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "8480-6",
                      "display": "Systolic blood pressure"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "271649006",
                      "display": "Systolic blood pressure"
                    },
                    {
                      "system": "http://acme.org/devices/clinical-codes",
                      "code": "bp-s",
                      "display": "Systolic Blood pressure"
                    }
                  ]
                },
                "valueQuantity": {
                  "value": systolic,
                  "unit": "mmHg",
                  "system": "http://unitsofmeasure.org",
                  "code": "mm[Hg]"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "normal"
                      }
                    ],
                    "text": "Normal"
                  }
                ]
              },
              {
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "8462-4",
                      "display": "Diastolic blood pressure"
                    }
                  ]
                },
                "valueQuantity": {
                  "value": diastolic,
                  "unit": "mmHg",
                  "system": "http://unitsofmeasure.org",
                  "code": "mm[Hg]"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "L",
                        "display": "low"
                      }
                    ],
                    "text": "Below low normal"
                  }
                ]
              }
            ]
          };
        const response = await api.post('4_0_0/Observation', data, { headers: { "Content-Type": "application/json+fhir" } });
        navigation.goBack();
    }

    function handleCancel(){
        navigation.goBack();
    }   

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false}
                placeholder="Systolic value" 
                placeholderTextColor="#999" 
                style={styles.input}
                value={systolic}
                onChangeText={setSystolic}  />

            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false}
                placeholder="Diastolic value" 
                placeholderTextColor="#999" 
                style={styles.input}
                value={diastolic}
                onChangeText={setDiastolic}  />

            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },
    input: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    } ,
    button: {
        height: 46,
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});
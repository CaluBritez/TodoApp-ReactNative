import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function AgregarTarea() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Tarea</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Título de la Tarea</Text>
          <TextInput
              style={styles.textInput}
              placeholder="Ingrese título"
              placeholderTextColor="#888"
          />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descripción de la Tarea</Text>
          <TextInput
              style={styles.textInput}
              placeholder="Ingrese descripción"
              placeholderTextColor="#888"
          />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ingrese Autor</Text>
          <TextInput
              style={styles.textInput}
              placeholder="nombre Autor"
              placeholderTextColor="#888"
          />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de la tarea</Text>
          <TextInput
              style={styles.textInput}
              placeholder="Ingrese fecha"
              placeholderTextColor="#888"
          />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1f245c',
},
welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(206, 113, 35, 0.6)',
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
},
taskContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
},
taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  marginTop: 20,
  color: '#0e88c9',
},
inputContainer: {
  marginBottom: 10,
  width: '100%', // Ensure input containers take full width
  paddingHorizontal: 20, // Optional: Add horizontal padding
  
},
label: {
  fontSize: 16,
  marginBottom: 5,
  color: '#0e88c9',
},
textInput: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  borderRadius: 5,
  width: '100%', // Ensure text inputs take full width
  backgroundColor: '#909edd',
  color: 'black',
},
});
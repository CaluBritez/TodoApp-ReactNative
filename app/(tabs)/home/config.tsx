import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
    </View>
  );
};
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
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Define un tipo para los parámetros de la ruta
type TaskParams = {
    id?: number;
    title?: string;
    description?: string;
    author?: string;
    date?: string;
};

export default function Detalle() {
    const { id, title, description, author, date } = useLocalSearchParams<TaskParams>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.author}>Autor: {author}</Text>
            <Text style={styles.date}>Fecha: {date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1f245c',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ededd3',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        color: '#ededd3',
        marginBottom: 10,
    },
    author: {
        fontSize: 16,
        color: '#ededd3',
        marginBottom: 10,
    },
    date: {
        fontSize: 14,
        color: '#ededd3',
    },
});
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
const tasks = require('../tasks/tasks.json');

// Define la interfaz para una tarea
interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

export default function VerTareas() {
    const { usuario } = useLocalSearchParams(); // Utilizar useLocalSearchParams para obtener los parámetros
    const [taskList, setTaskList] = useState<Task[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Carga las tareas desde el archivo JSON
        setTaskList(tasks);
    }, []);

    const handleViewDetail = (task: Task) => {
        // Navega a la pestaña de detalle pasando la información de la tarea
        router.push({
            pathname: '/home/detalle',
            params: { ...task },
        });
    };

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Bienvenid@ {usuario}</Text>
            <FlatList
                data={taskList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <Button
                            title="Ver Detalle"
                            onPress={() => handleViewDetail(item)}
                        />
                    </View>
                )}
            />
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
    color: '#ededd3',
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
    width: '100%',
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
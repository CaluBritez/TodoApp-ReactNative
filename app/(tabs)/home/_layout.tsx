import { Tabs } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="ver-tareas" options={{ title: 'Ver Tareas' }} initialParams={{ usuario: '' }}/>
      <Tabs.Screen name="detalle" options={{ title: 'Detalle' }} />
      <Tabs.Screen name="agregar-tarea" options={{ title: 'Agregar Tarea' }} />
      <Tabs.Screen name="editar-tarea" options={{ title: 'Editar Tarea' }} />
      <Tabs.Screen name="config" options={{ title: 'Configuraciones' }} />
    </Tabs>
  );
}
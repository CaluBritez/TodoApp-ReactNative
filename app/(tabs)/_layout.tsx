import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }}/>
    </Stack>
    
  );
}

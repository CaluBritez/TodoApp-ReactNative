import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const imageLogin = require('@/assets/images/villano.jpg');
const errorImage = require('@/assets/images/bicho.png');
import { useRouter } from 'expo-router';

const usuarios = [
    { usuario: 'Calu', password: '123456' },
    { usuario: 'Silvana', password: '123456' },
    { usuario: 'Dani', password: '123456' },
];
const validarLogin = (usuario: string, contrasena: string) => {
    // Verificar si las credenciales son válidas
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.password === contrasena);
    return !!usuarioValido; // Retorna true si encuentra un usuario válido, de lo contrario false
};

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        if (validarLogin(usuario, contraseña)) {
            router.push({ 
                pathname: '/home', 
                params: { usuario } });
        } else {
            setError(true); // Muestra el mensaje de error
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a TodoApp</Text>
            <Image source={imageLogin} style={styles.image} />
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Usuario</Text>
                <TextInput
                    style={styles.textInput}
                    value={usuario}
                    onChangeText={setUsuario}
                    placeholder="Ingrese su usuario"
                    placeholderTextColor="#888"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    value={contraseña}
                    onChangeText={setContraseña}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor="#888"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Credenciales incorrectas</Text>
                    <Image source={errorImage} style={styles.errorImage} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1f245c',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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
    loginButton: {
        marginTop: 13,
        padding: 10,
        borderRadius: 5,
        width: '50%',
        backgroundColor: '#0e88c9', // Background color of the button
        alignItems: 'center', // Center text horizontally
    },
    loginButtonText: {
        color: '#fff', // Text color of the button
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 250, // Adjust width as needed
        height: 250, // Adjust height as needed
        marginBottom: 15,
        marginTop: 15, // Add space between image and other elements
        resizeMode: 'contain', // Ensure the image is not stretched
    },
    errorContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    errorText: {
        color: '#0e88c9',
        fontSize: 16,
        marginBottom: 10,
    },
    errorImage: {
        height: 150, // Cambia el ancho según lo necesites
        aspectRatio: 1, // Mantiene la proporción de aspecto original de la imagen
    },
});
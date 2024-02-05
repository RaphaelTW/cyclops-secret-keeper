import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleCadastroPress = () => {
        navigation.navigate('Cadastro');
    };

    const handleListarPress = () => {
        navigation.navigate('Lista');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🛡️Cyclops Secret Keeper🛡️</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleListarPress}>
                    <Text style={styles.buttonText}>Listar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d0053',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#ff4107',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;

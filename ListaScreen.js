import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaScreen = ({ navigation }) => {
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        const loadCadastros = async () => {
            const keys = await AsyncStorage.getAllKeys();
            const cadastros = await AsyncStorage.multiGet(keys);
            setCadastros(cadastros.map(([, value]) => JSON.parse(value)));
        };
        loadCadastros();
    }, []);

    const handleMostrarDetalhes = (cadastro) => {
        navigation.navigate('Detalhes', { cadastro });
    };

    const handleVoltarHome = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {cadastros.map((cadastro, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.cardText}>{cadastro.nomeSite}</Text>
                    <Button
                        title="Mostrar Detalhes"
                        onPress={() => handleMostrarDetalhes(cadastro)}
                    />
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <Button title="Voltar para o Home" onPress={handleVoltarHome} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#1d0053',
    },
    card: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff4107',
        elevation: 3,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default ListaScreen;

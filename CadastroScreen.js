import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
  const [nomeSite, setNomeSite] = useState('');
  const [emailUsername, setEmailUsername] = useState('');
  const [senha, setSenha] = useState('');

  const handleSalvar = async () => {
    const novoCadastro = { nomeSite, emailUsername, senha };
    try {
      await AsyncStorage.setItem(nomeSite, JSON.stringify(novoCadastro));
      setNomeSite('');
      setEmailUsername('');
      setSenha('');
      Alert.alert('Sucesso', 'Cadastro salvo com sucesso!');
      navigation.navigate('Lista');
    } catch (error) {
      console.error('Erro ao salvar o cadastro:', error);
    }
  };

  const handleVoltar = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Site"
        value={nomeSite}
        onChangeText={setNomeSite}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail ou Username"
        value={emailUsername}
        onChangeText={setEmailUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={handleSalvar} />
        <Button title="Voltar" onPress={handleVoltar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});

export default CadastroScreen;

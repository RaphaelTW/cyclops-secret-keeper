import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalhesScreen = ({ route, navigation }) => {
  const { cadastro } = route.params;

  const handleEditar = async () => {
    // Implementar a lógica para edição
    // Pode ser abrir uma tela de edição ou modais, dependendo da sua preferência
    Alert.alert('Editar Cadastro', 'Lógica de edição ainda não implementada.');
  };

const handleExcluir = async () => {
  try {
    // Remover o cadastro do AsyncStorage
    await AsyncStorage.removeItem(cadastro.nomeSite);
    // Atualizar a lista de cadastros removendo o cadastro excluído
    setCadastros(prevCadastros => prevCadastros.filter(item => item.nomeSite !== cadastro.nomeSite));
    // Alertar o usuário que o cadastro foi excluído
    Alert.alert('Cadastro Excluído', 'O cadastro foi excluído com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir cadastro:', error);
    // Alertar o usuário em caso de erro
    Alert.alert('Erro', 'Ocorreu um erro ao excluir o cadastro. Por favor, tente novamente.');
  }
};


  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Cadastro</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Nome do Site: {cadastro.nomeSite}</Text>
        <Text style={styles.cardText}>E-mail ou Username: {cadastro.emailUsername}</Text>
        <Text style={styles.cardText}>Senha: {cadastro.senha}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={handleEditar} color="#008000" />
        <Button title="Excluir" onPress={handleExcluir} color="#FF0000" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default DetalhesScreen;

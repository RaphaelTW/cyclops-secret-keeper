import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CadastroScreen from './CadastroScreen';
import ListaScreen from './ListaScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Cadastro">
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Lista" component={ListaScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

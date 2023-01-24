import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './css/style'
import tabuada_2 from './screen/tabuada_2'


function HomeScreen({ navigation }) {
  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}>Tabuada</Text>
      <Button
        title="Tabuada do 2"
        onPress={() => navigation.navigate('TabuadaDo2')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'APP Tabuada' }} />
          <Stack.Screen name="TabuadaDo2" component={tabuada_2} options={{ title: 'Tabuada do 2'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



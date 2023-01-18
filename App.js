//
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [real, setReal]=useState('');
  const [cotacao, setCotacao]=useState('');
  const [conversor, setConv]=useState('');

  function convert() {
    if (real && cotacao){
      setConv((parseFloat(real)*parseFloat(cotacao)).toFixed(2))
    }else{
      <Text>{conversor ? `erro, tente novamente!` : ''}</Text>
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>Conversor de Cédulas</Text>
      <StatusBar style="auto" />
      <Text>Insira os valores no campo de texto:</Text>
    <TextInput
      placeholder='Digite o valor em R$'
      style={{height:40,textAlign:'center'}}
      keyboardType={'numeric'}
      onChangeText={real => setReal(real)}
    />
    <TextInput 
      placeholder='Digite a cotação em $ ou €'
      style={{height:40, width: 180, textAlign:'center'}}
      keyboardType={'numeric'}
      onChangeText={cotacao => setCotacao(cotacao)}/>
      <Text> </Text>
    <Button
      title='Converter'  
      onPress={convert}
    />
    <Text>{conversor ? `resultado: R$ ${conversor} ` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});

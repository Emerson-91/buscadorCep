import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

import api from './src/services/api'

export default function App() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  //FUNÇÃO PARA REALIZAR A CONSULTA DE CEP
  async function buscarCep(){
    if(cep ==""){
      Alert.alert("Cep inválido!")
      setCep('')
    }
    try{
      const response = await api.get(`${cep}/json/ `)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      
    }catch(error){
      console.log("Erro" + error)
    }
  }
  function limparDados(){
    setLocalidade("")
    setCep("")
    setLogradouro("")
    setUf("")
    setBairro("")
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#018786' />
      <View style={styles.topBar}>
        <Text style={styles.title}>Buscador de CEP</Text>
      </View>
      <View style={styles.containerCep}>
        <TextInput
          style={[styles.campoCep, styles.campos]}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          placeholder='Digite o CEP'
        />
        <TouchableOpacity style={[styles.buscarButton, styles.campos]} onPress={buscarCep}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>

      </View>
      <Text style={[styles.subTitle]}>Logradouro: </Text>
      <TextInput
        style={[styles.campos]}
        value={logradouro}
        onChangeText={(texto) => setLogradouro(texto)}
        placeholder='Rua, Avenida ...'
      />

      <Text style={[styles.subTitle]}>Bairro: </Text>
      <TextInput
        style={[styles.campos]}
        value={bairro}
        onChangeText={(texto) => setBairro(texto)}
        placeholder='Bairro'
      />

      <Text style={[styles.subTitle]}>Cidade: </Text>
      <TextInput
        style={[styles.campos]}
        value={localidade}
        onChangeText={(texto) => setLocalidade(texto)}
        placeholder='Cidade'
      />

      <Text style={[styles.subTitle]}>Estado: </Text>
      <TextInput
        style={[styles.campoEstado, styles.campos]}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
        placeholder='Estado'
      />
       <TouchableOpacity style={styles.resetButton} onPress={limparDados}>
          <Text style={styles.textReset}>LIMPAR</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  topBar: {
    margin: -5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#018786',
    borderBottomColor: '#2F4F4F',
    borderBottomWidth: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  
  },
  containerCep: {
    flexDirection: 'row',
    height: 100,
    marginHorizontal: 20,

  },
  campoCep: {
    width: '60%',
    fontSize: 18,
    padding: 5,

  },
  campos: {
    borderColor: '#000',
    paddingLeft: 10,
    borderBottomWidth: 6,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    height: 60,
    fontSize:22,
  },
  buscarButton: {
    width: '40%',
    marginLeft: 10,
    backgroundColor: '#363636',
    justifyContent: 'center',

  },
  textButton: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: -15,
    marginHorizontal: 10,
  },
  campoEstado: {
    width: '30%'
  },
  resetButton:{
    margin:20,
    width:'80%',
    backgroundColor:'red',
    borderRadius:15,
    height:'8%',
    alignSelf:'center',
    justifyContent:'center',
    borderBottomWidth:4,
    borderBottomColor:'#800000'
  },
  textReset:{
    fontSize:25,
    fontWeight:'bold',
    color:'#FFF',
    alignItems:'center',
    alignSelf:'center'
  }



})
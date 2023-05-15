import React, {useState} from 'react'
import { StatusBar, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function App(){
  
  const [cep,setCep] = useState("")


  return(
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
        <TouchableOpacity style={[styles.buscarButton, styles.campos]}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text  style={[styles.subTitle]}>Logradouro: </Text>
        <TextInput  style={[styles.campos]} placeholder='Rua, Avenida ...'/>
      </View>
      <View >
        <Text  style={[styles.subTitle]}>Bairro: </Text>
        <TextInput  style={[styles.campos]} placeholder='Bairro'/>
      </View>
      <View >
        <Text  style={[styles.subTitle]}>Cidade: </Text>
        <TextInput  style={[styles.campos]} placeholder='Cidade'/>
      </View>
      <View >
        <Text  style={[styles.subTitle]}>Estado: </Text>
        <TextInput  style={[styles.campoEstado, styles.campos ]} placeholder='Estado'/>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    margin:5,
  },
  topBar:{
    margin:-5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    height:70,
    backgroundColor:'#018786',
  },
  title:{
    alignSelf:'center',
    fontSize:30,
    fontWeight: 'bold',
    color:'#FFF',
  },
  containerCep:{
    flexDirection:'row',
    height:100,
    marginHorizontal: 20,
    
  },
  campoCep:{
    width:'60%',
    fontSize:18,
    padding:5,
    
  },
  campos:{
    borderColor:'#000',
    paddingLeft:10,
    borderBottomWidth:6,
    borderWidth:1,
    borderRadius:15,
    marginTop:20,
    height:60,
  },
  buscarButton:{
    width:'40%',
    marginLeft:10,
    backgroundColor:'#363636',
    justifyContent:'center',

  },
  textButton:{
    fontSize:24,
    color:'#FFF',
    fontWeight:'bold',
    alignSelf:'center',
  },
  subTitle:{
    fontSize:18,
    marginTop:10,
    marginBottom:-15,
    marginHorizontal:10,
  },
  campoEstado:{
    width:'30%'
  }



})
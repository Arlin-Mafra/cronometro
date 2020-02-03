import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      contagem:0,
      botao: 'Start'
    }
    this.timer = null

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)


  }


  start(){
    let s = this.state
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
      s.botao = 'Start'

    }else{
      this.timer = setInterval(() =>{
        s.contagem += 0.1
        this.setState(s)
      }, 100 )

      s.botao = 'Stop'
      
    }
    this.setState(s)
  }

  reset(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    let s = this.state
    s.contagem = 0
    s.botao = 'Start'
    this.setState(s)

  }
  
  render(){
      return(
        <View style={styles.container}>
          <Image style={styles.imagem} source={require('./images/cronometro.png')}/>
      <Text style={styles.texto}>{this.state.contagem.toFixed(1)}</Text>

          <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.start}>
            <Text style={styles.textoBotao}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.reset}>
            <Text style={styles.textoBotao}>Reset</Text>
          </TouchableOpacity>
          </View>

        </View>

      )}
    }

  
  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem:{
    height:500,
    width:500
  },


  texto:{
fontSize:60,
marginTop:-250

},

botaoArea:{
  
  marginTop:180,
  flexDirection:"row",
  height:40
  
},

botao:{
  flex:1,
  borderWidth:3,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:'#b300b3',
  borderRadius:25,
  margin:10,
  height:40,
  


},
textoBotao:{
fontSize:30,

}

});

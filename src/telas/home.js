import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import estilo from "../estilos/css";



export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
  }

  cadastrar() {
    this.props.navigation.navigate('Cadastro');
  }

  login() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (

      <ImageBackground source={require('../img/fundo.jpg')} style={estilo.bg}>
        <View style={estilo.container}>
          <Text style={estilo.title}>Fluxo de Caixa</Text>

          <View style={estilo.buttonArea}>
            <TouchableHighlight underlayColor="#CCC" onPress={this.cadastrar} estilo={estilo.button}>
              <Text style={estilo.btnText}>Cadastrar</Text>
            </TouchableHighlight>
            </View>
        

            <View style={estilo.buttonArea}>

            <TouchableHighlight underlayColor="#CCC" onPress={this.login} estilo={estilo.button}>
              <Text style={estilo.btnText}>Login</Text>
            </TouchableHighlight>
            </View>
        
        </View>

      </ImageBackground>

    );
  }

}
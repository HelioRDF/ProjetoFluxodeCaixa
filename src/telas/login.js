import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, Button, TouchableOpacity, Linking } from 'react-native';
import estilo from "../estilos/css";
import firebase from "../firebase/FireBaseConnection";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      senhaInput: ''
    };
    this.login = this.login.bind(this);
    firebase.auth().signOut();
  }
  login() {
    if (this.state.emailInput != '' && this.state.senhaInput != '') {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          alert("Usuário logado com sucesso!");
          this.props.navigation.navigate('Interna');
        }
      });
      firebase.auth().signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.senhaInput
      ).catch((error) => {
        alert(error.code);
      });
    }
  }

  render() {
    return (
      <ImageBackground source={require('../img/fundo.jpg')} style={estilo.bg}>
        <View style={estilo.containerCadastro}>
          <Text style={estilo.labelCadastro} >E-mail</Text>
          <TextInput style={estilo.input}
            onChangeText={(emailInput) => this.setState({ emailInput })} />

          <Text style={estilo.labelCadastro} >Senha</Text>
          <TextInput style={estilo.input} secureTextEntry={true}
            onChangeText={(senhaInput) => this.setState({ senhaInput })} />
          <Button title="Entrar" onPress={this.login} ></Button>
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
            <Text style={estilo.esqueciSenha}>
              Esqueci a Senha </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }
}
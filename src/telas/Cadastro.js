import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, Button } from 'react-native';
import estilo from "../estilos/css";
import firebase from "../firebase/FireBaseConnection";


export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      senhaInput: ''
    };
    this.cadastrar = this.cadastrar.bind(this);
    firebase.auth().signOut();
  }
  cadastrar() {
    if (this.state.emailInput != '' && this.state.senhaInput != '') {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let uid = user.uid;
          firebase.database().ref('users').child(uid).set({ email: this.state.emailInput, saldo: 0 });
          alert("Usuário Cadastrado com sucesso");
          this.props.navigation.navigate('Interna');

        }
      });
      firebase.auth().createUserWithEmailAndPassword(
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

          <Button title="Cadastrar" onPress={this.cadastrar} ></Button>

        </View>
      </ImageBackground>
    );
  }
}
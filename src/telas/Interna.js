import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import estilo from "../estilos/css";
import HistoricoItem from "../telas/HistoricoItem";
import firebase from "../firebase/FireBaseConnection";


export default class Interna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saldo: 0,
      historico: []
    };
    this.addDespesa = this.addDespesa.bind(this);
    this.addReceita = this.addReceita.bind(this);
    this.sair = this.sair.bind(this);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          state.saldo = snapshot.val().saldo;
          this.setState(state);
        })

      } else {
        this.props.navigation.navigate('home');
      }

    });
  }



  sair() {
    firebase.auth().signOut();

  }

  addReceita() {
    this.props.navigation.navigate('addReceita');

  }
  addDespesa() {

  }
  render() {

    var valor = this.state.saldo;
    if (valor >= 0) {
      valor = <View style={estilo.saldoArea}>
        <Text style={estilo.saldoLabel}>Saldo R$: </Text>
        <Text style={estilo.saldoPositivo}>
          {this.state.saldo} </Text>
      </View>

    } else {
      valor = <View style={estilo.saldoArea}>
      <Text style={estilo.saldoLabel}>Saldo R$: </Text>
      <Text style={estilo.saldoNegativo}>
        {this.state.saldo} </Text>
    </View>
    }
    return (
      <View style={estilo.containerInterna}>
        {valor}
        <FlatList style={estilo.historico}
          data={this.state.historico}
          renderItem={(item) => <HistoricoItem data={item} />} />

        <View style={estilo.btnArea}>
          <View style={estilo.teste}>
            <Button title="+ Receita" onPress={this.addReceita} />
          </View>
          <View style={estilo.teste}>
            <Button title="+ Despesa" onPress={this.addDespesas} />
          </View>

          <View style={estilo.teste}>
            <Button title="Sair" onPress={this.sair} />
          </View>


        </View>

      </View>
    );
  }

}
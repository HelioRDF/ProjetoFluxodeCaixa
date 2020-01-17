import React, { Component } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import estilo from "../estilos/css";
import HistoricoItem from "../telas/HistoricoItem";
import firebase from "../firebase/FireBaseConnection";


export default class Interna extends Component {
  constructor(props) {
    super(props);
    uid = '';

    this.state = {
      saldo: 0,
      uid: '',
      valorFiltro: 0,
      historico: []
    };
    this.addDespesa = this.addDespesa.bind(this);
    this.addReceita = this.addReceita.bind(this);
    this.sair = this.sair.bind(this);
    this.listarHistorico = this.listarHistorico.bind(this);
    this.listarHistorico();
  }

  listarHistorico() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          let meuSaldo = snapshot.val().saldo;
          state.saldo = meuSaldo.toFixed(2);
          this.setState(state);
        });
        this.state.uid = user.uid;

        firebase.database().ref('historico').child(this.state.uid).orderByChild('valor')
          .startAt(parseInt(this.state.valorFiltro)).on('value', (snapshot) => {
            let state = this.state;
            state.historico = [];
            snapshot.forEach((childItem) => {
              let valorFloat = parseFloat(childItem.val().valor);
              state.historico.push({
                key: childItem.key,
                type: childItem.val().type,
                valor: valorFloat.toFixed(2)

              });
            });
            this.setState(state);
          });

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
    this.props.navigation.navigate('addDespesa');
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

        <View style={{ flexDirection: 'row',alignContent:'center' }}>
       
          <TextInput placeholder='Valor Min' style={{ border: 'gray', borderWidth: 1, flex:1, margin: 5 }} keyboardType="numeric"
            value={this.state.valorFiltro}
            onChangeText={(valorFiltro) => this.setState({ valorFiltro })
            }
          />
          <View style={{flex:1,margin:10}}>
            <Button title="Filtrar" onPress={this.listarHistorico} />
          </View>
        </View>


        <FlatList style={estilo.historico}
          data={this.state.historico}
          renderItem={({ item }) => <HistoricoItem data={item} />} />

        <View style={estilo.btnArea}>
          <View style={estilo.teste}>
            <Button title="+ Receita" onPress={this.addReceita} />
          </View>
          <View style={estilo.teste}>
            <Button title="+ Despesa" onPress={this.addDespesa} />
          </View>

          <View style={estilo.teste}>
            <Button title="Sair" onPress={this.sair} />
          </View>


        </View>

      </View>
    );
  }

}
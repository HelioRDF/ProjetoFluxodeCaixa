import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import estilo from "../estilos/css";
import firebase from "../firebase/FireBaseConnection";
import { TextInput } from 'react-native-gesture-handler';


export default class addReceita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor:'',
    };this.add=this.add.bind(this);

  }

  add(){
    if(this.state.valor!=''){
     let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
     let key= historico.push().key;
     let user=  firebase.database().ref('users')
     .child(firebase.auth().currentUser.uid);

      historico.child(key).set({
        type:'receita',
        valor:this.state.valor
      });
      alert('Valor Adicionado: R$ '+ this.state.valor);

    
      user.once('value').then((snapshot)=>{
        let saldo=snapshot.val().saldo;
        saldo+=parseFloat(this.state.valor);
        user.set({
          saldo:saldo
        });
        this.props.navigation.goBack();
      });
  }}

  render() {
    return (
      <View>
      <View style={estilo.containerAddReceita} >
        <Text  style={{textAlignVertical:'center', fontSize:18}}>Valor:</Text>
        <TextInput autoFocus={true} style={estilo.inputAddReceita} keyboardType="numeric" value={this.state.valor}
        onChangeText={(valor)=>this.setState({valor})
      }
        />
      </View>
      
      <Button title="Adicionar" onPress={this.add}/>
      </View>
      
    );
  }
}
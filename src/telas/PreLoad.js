import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import estilo from "../estilos/css";
import firebase from "../firebase/FireBaseConnection";



export default class PreLoad extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                alert("Usuário Logado");
                this.props.navigation.navigate('Interna');
            }else{
                alert("Usuário deslogado");
                this.props.navigation.navigate('Home');
            }
      
          });
    }



    render() {
        return (

            <ImageBackground source={require('../img/fundo.jpg')} style={estilo.bg}>
                <View style={estilo.container}>
                    <Text style={estilo.title}>Fluxo de Caixa</Text>
                </View>
            </ImageBackground>

        );
    }

}
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import estilo from "../estilos/css";

export default class HistoricoItem extends Component {
    constructor(props) {
        super(props);
        let bg='';
        if(this.props.data.type=='Despesa'){
            bg='#FF0000'
        }
        this.state = {
            bg:bg
        };
    }
    render() {
        return (
            <View style={estilo.areaHistorico}>
                <Text style={{color:this.state.bg, marginHorizontal:5}} >  {this.props.data.type} </Text>
                <Text style={{color:this.state.bg, marginHorizontal:5}} >R$: {this.props.data.valor}  </Text>
            </View>
        );
    }
}

import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from "./src/telas/Login";
import Home from "./src/telas/Home";
import Cadastro from "./src/telas/Cadastro";
import Interna from "./src/telas/Interna";


const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
    /** Configuração por tela */
    navigationOptions: {
      title:"Home",
   
      headerTintColor: '#FFF',
      headerStyle:{
        backgroundColor:'#444'
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Login: {
    screen: Login,
    /** Configuração por tela */
    navigationOptions: {
      title:"Home",
      header:null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Cadastro: {
    screen: Cadastro,
    /** Configuração por tela */
    navigationOptions: {
      title:"Home",
      header:null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Interna: {
    screen: Interna,
    /** Configuração por tela */
    navigationOptions: {
      title:"Interna",
      header:null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },
 
}, {
  /** Configuração padrão */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#037a76'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
});
export default createAppContainer(AppNavigator);
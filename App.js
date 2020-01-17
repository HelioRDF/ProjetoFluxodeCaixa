import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from "./src/telas/Login";
import Home from "./src/telas/Home";
import Cadastro from "./src/telas/Cadastro";
import Interna from "./src/telas/Interna";
import PreLoad from "./src/telas/PreLoad";
import addReceita from "./src/telas/addReceita";
import addDespesa from "./src/telas/addDespesa";


const AppNavigator = createStackNavigator({

  PreLoad: {
    screen: PreLoad,
    /** Configuração por tela */
    navigationOptions: {
      title: "Interna",
      header: null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  addReceita: {
    screen: addReceita,
    /** Configuração por tela */
    navigationOptions: {
      title: "Adicionar Receita",
      
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  addDespesa: {
    screen: addDespesa,
    /** Configuração por tela */
    navigationOptions: {
      title: "Adicionar Despesa",
      
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
      title: "Interna",
      header: null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Home: {
    screen: Home,
    /** Configuração por tela */
    navigationOptions: {
      title: "Home",

      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#444'
      },
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Login: {
    screen: Login,
    /** Configuração por tela */

    headerTintColor: '#FF2',
    navigationOptions: {
      title: "Login",
      header: null,
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Cadastro: {
    screen: Cadastro,
    /** Configuração por tela */
    navigationOptions: {
      title: "Home",
      header: null,
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
      backgroundColor: '#444'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
});
export default createAppContainer(AppNavigator);
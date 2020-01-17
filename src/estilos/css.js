
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null,
    },

    title: {
        fontSize: 40,
        backgroundColor: 'transparent',
        marginBottom: 20,
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerCadastro: {
        margin: 10,

    },

    buttonArea: {
        marginTop: 5,
        backgroundColor: '#000fff',
        width: 200,
        height: 30
    },

    button: {
        backgroundColor: '#bfb300',
        margin: 10,
        height: 45,
        width: 200,
        justifyContent: 'center',
        color: '#777'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 2

    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        padding: 5,
        marginBottom: 10,

    },
    inputAddReceita: {
        height:40,
        backgroundColor:'#DDD',
        margin:10,
        flex:1,
    
    },
    labelCadastro: {
        fontSize: 18,

    },
    esqueciSenha: {
        textDecorationLine: 'underline',
        marginTop: 15,
        textAlign: "center",
        color: 'blue'
    },
    containerInterna: {
        marginTop: 20,
        flex:1
    },
    saldoArea:{
        
        flexDirection:'row',
        justifyContent:'center',
        padding:20,
        backgroundColor:'#479fd4'
    },
    saldoPositivo:{
        textAlign:'center',
        fontSize:20,
        color: 'blue'

    },
    saldoLabel:{
        textAlign:'center',
        fontSize:20,
        color: 'black'

    },
    saldoNegativo:{
        textAlign:'center',
        fontSize:20,
        color: 'red'

    },
    historico:{
        flex:1,
        marginTop:10
    },
    btnArea:{
   
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#b2f7f0",
        flexDirection:'row',
        justifyContent:'space-evenly',

    },
      teste:{
          flex:1,
          marginHorizontal:5
      },
      containerAddReceita:{
          flexDirection:'row',
          margin:10
      },
      areaHistorico:{
          borderBottomColor:'gray',
          borderBottomWidth:1,
          
          height:40,
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          backgroundColor:'#CCC',
          
      }

});
export default styles;
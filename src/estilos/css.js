
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
    labelCadastro: {
        fontSize: 18,

    },
    esqueciSenha: {
        textDecorationLine: 'underline',
        marginTop: 15,
        textAlign: "center",
        color:'blue'
    }
});
export default styles;
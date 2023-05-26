import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.BACKGROUND,
    },
    imageLogo:{
        width: 310,
        height: 310,
        marginTop: -350
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 50,
        width: '80%',
        height: 50,
        padding: 10,
        color: colors.BACKGROUNDINPUT,
        borderColor: colors.BACKGROUNDINPUT,
        fontSize: 18

    },
    containerInputPassword: {
        width: '80%',
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderColor: colors.BACKGROUNDINPUT,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 50
    },
    inputPassword: {
        width: '100%',
        fontSize: 18,
        borderColor: colors.BACKGROUNDINPUT,
        
    },
    TextResetPassword: {
        color: colors.BACKGROUNDINPUT,
        fontSize: 14,
        marginTop: 5

    },
    containerButtonLogin: {
        width: "80%",
        height: 50,
        backgroundColor: colors.BACKGROUNDINPUT,
        borderRadius: 7,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    TextButtonLogin: {
        color: colors.BACKGROUND,
        fontSize: 18
    },
    TextCadastro:{
        color: colors.BACKGROUNDINPUT,
        fontSize: 14,
        marginTop: 50
    }

  
}
)
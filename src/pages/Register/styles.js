import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.BACKGROUND
      
    
        },
        input: {
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 20,
            width: '80%',
            height: 45,
            padding: 10,
            color: colors.BACKGROUNDINPUT,
            borderColor: colors.BACKGROUNDINPUT,
            fontSize: 18
    },
    containerInputPassword: {
        width: '80%',
        padding: 10,
        height: 45,
        borderWidth: 1,
        borderColor: colors.BACKGROUNDINPUT,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 20
    },inputPassword: {
        width: '100%',
        fontSize: 18,
        borderColor: colors.BACKGROUNDINPUT,
        
    },containerButtonRegister: {
        width: "80%",
        height: 50,
        backgroundColor: colors.BACKGROUNDINPUT,
        borderRadius: 7,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    TextButtonRegister: {
        color: colors.BACKGROUND,
        fontSize: 18
    },
})
import {React, useState} from "react";
import {View, Text, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles"; 
import { colors } from "../../styles";
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";
import { firebaseConfig } from "../../../firebase";
import { initializeApp } from "firebase/app";
import { useNavigation } from "@react-navigation/native";

export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);

    const navigation = useNavigation()

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log("conta criada!")         
            const user =userCredential.user;
            console.log(user)
            Alert.alert("Conta Criada")
            navigation.navigate("Login")
            
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    return (

        <View style={styles.container}>
             <TextInput 
            value={name} 
            onChangeText={value => 
            setName(value)} 
            style={styles.input} 
            placeholder="Nome Completo"
            placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
            />

             <TextInput 
            value={email} 
            onChangeText={value => 
            setEmail(value)} 
            style={styles.input} 
            placeholder="Email"
            placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
            />
          <View style={styles.containerInputPassword}>

                <TextInput 
                value={password} 
                onChangeText={value => setPassword(value)} 
                style={[styles.inputPassword, {flex:1} ]} 
                placeholder="Senha"
                placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
                secureTextEntry={!passwordIsVisible}
                />
                <TouchableOpacity onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
                    <Feather 
                    name="eye" size={20} 
                    color={colors.PLACEHOLDER_TEXT_COLOR} 
                    />

                </TouchableOpacity>

            </View >
            <TouchableOpacity onPress={handleCreateAccount} style={styles.containerButtonRegister}>
                    <Text style={styles.TextButtonRegister}>CADASTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {() => {navigation.navigate("Login")}}>
                    <Text style={styles.TextCadastro}>Já tem um conta? Entrar</Text>
                </TouchableOpacity>
        </View>
    )
}
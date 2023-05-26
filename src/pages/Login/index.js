import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons'
import { colors } from "../../styles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../firebase";
import { initializeApp } from "firebase/app";
import Home from "../Home";





export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
    // const entrou = () => {
    //     navigation.reset({
    //         index: 0,
    //         routes: [{name: Home}]
    //     })
    // }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log("logado!")
            const user =userCredential.user;
            console.log(user)
            entrou()
            
        })
        .catch(error => {
            console.log(error)
            
        })
    }

    return (
        <View style={styles.container}>
            <Image 
            source={require('../../../assets/logoSenai.png')} 
            style={styles.imageLogo}
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
                <TouchableOpacity>
                    <Text style={styles.TextResetPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignIn} style={styles.containerButtonLogin}>
                    <Text style={styles.TextButtonLogin}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.TextCadastro}>Não tem conta? Cadastra-se?</Text>
                </TouchableOpacity>
        </View>

       

    )
}
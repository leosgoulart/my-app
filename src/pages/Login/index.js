import React, { useEffect, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons'
import { colors } from "../../styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../firebase";
import { initializeApp } from "firebase/app";
import { useNavigation } from "@react-navigation/native";




export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
 
    const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged( user => {
    //         if (user) {
    //             navigation.navigate("Home")
    //         }
    //         return unsubscribe
    //     }, [])

    // })


    const handleSignIn = () => {
        
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log("logado!")
            const user =userCredential.user;         
            console.log(user)
            navigation.navigate("Home")
            
            
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
                    <Text onPress={() => navigation.navigate("Register")}style={styles.TextCadastro}>Não tem conta? Cadastra-se?</Text>
                </TouchableOpacity>
        </View>

       

    )
}
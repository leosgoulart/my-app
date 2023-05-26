import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}       
        />
      <Stack.Screen
        name="Register"
        component={Register}       
        />
       
        <Stack.Screen
        name="Home"
        component={Home}       
        />
        
      </Stack.Navigator>
   </NavigationContainer>
  );
}


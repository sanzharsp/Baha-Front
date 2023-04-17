import React from 'react';
import LoginScreen from "react-native-login-screen";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {

    ScrollView,

  
  } from 'react-native';
import { useState } from 'react';

import url from '../components/Back'
import Counter from './components/MOBX/ProfileRender/ProfileMobxRener'

export default function AdminScreen() {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const Login = async ()=>{
        await axios.post(url.base+'api/v1/login',{
            email:email,
            password:password,
        }).then(async (response)=>{

            if (response.status == 200) {
           
                await AsyncStorage.setItem('@access', response.data.access);
                await AsyncStorage.setItem('@refresh', response.data.refresh);
                Counter.trigger();
            }
    
        }).catch((error)=>{
            console.log(error)
        })
        
    }

  return (
    < ScrollView >

<LoginScreen

  onLoginPress={() => {Login()}}
  onSignupPress={() => {}}
  onEmailChange={(value) => {

    setEmail(value)
  }}
  loginButtonText={'Кіру'}


  onPasswordChange={(password) => {setPassword(password)}}
/>
</ScrollView>
  );
}



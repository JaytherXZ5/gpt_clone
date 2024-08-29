import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { defaultStyles } from '../constants/Styles';
import { TextInput } from 'react-native';
import Colors from '@/constants/Colors';

const Page = () => {
  const { type } = useLocalSearchParams<{ type: string}>();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  //console.log('~ Page ~ type:',type);

  const onSignUpPress = async() =>{};
  const onLoginPress = async() => {};

  

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding': 'height'}
      keyboardVerticalOffset={1} 
      style={styles.container}>
        {loading && (<View style={defaultStyles.loadingOverlay}>
            <ActivityIndicator size="large" color="#fff"/>
        </View> )}
      <Image style={styles.logo} source={require('../assets/images/logo-dark.png')}/>

      <Text style={styles.title}>
          {type === 'login' ? 'Welcome back' : 'Create your account'}
      </Text>

      <View style={{marginBottom: 30}}>
        <TextInput
          style={styles.inputField}
          autoCapitalize='none'
          placeholder='Email'
          value={emailAddress}
          onChangeText={setEmailAddress}
          />
        <TextInput
          style={styles.inputField}
          autoCapitalize='none'
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          />
      </View>

      {type === 'login' ? (
        <TouchableOpacity
            onPress={onLoginPress}
            style={[defaultStyles.btn, styles.btnPrimary]}>
            <Text style = {styles.btnPrimaryText}>
                Login
            </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
            onPress={onSignUpPress}
            style={[defaultStyles.btn, styles.btnPrimary]}>
            <Text style = {styles.btnPrimaryText}>
                Create Account
            </Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo:{
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 80,
  },
  title:{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputField:{
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding:10,
    backgroundColor: '#fff',
  },
  btnPrimary:{

  },
  btnPrimaryText:{

  },

});

export default Page;
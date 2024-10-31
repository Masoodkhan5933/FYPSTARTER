import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

// Import JSON data directly
import users from '../assets/users.json';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Check if the user exists and the password is correct
    const user = users.find(user => user.email === username && user.password === password);

    if (user) {
      Alert.alert('Success', 'Login Successful!');
      navigation.navigate('Home'); // Change 'Home' to your actual target screen
    } else {
      Alert.alert('Error', 'Incorrect Email or Password');
    }
  };

  return (
    <LinearGradient colors={['#0AD1C8', '#073235']} style={styles.container}>
      <Text style={styles.title}>AASANI</Text>
      <Text style={styles.welcomeText}>WELCOME BACK</Text>
      <Text style={styles.loginToContinue}>LOGIN TO CONTINUE</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your email"
          placeholderTextColor="#A0A0A0"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
      </View>

      <View style={styles.rememberForgotContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#0AD1C8' : undefined}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'JockeyOne-Regular',
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 60,
  },
  welcomeText: {
    fontFamily: 'JockeyOne-Regular',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
  },
  loginToContinue: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 5,
  },
  forgotPasswordText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#80ED99',
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dontHaveAccountText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  signUpText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#80ED99',
  },
});

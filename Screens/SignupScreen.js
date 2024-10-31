import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get("window");

export default function SignUpScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
 const navigation = useNavigation();
  return (
    <LinearGradient colors={["#0AD1C8", "#073235"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>AASANI</Text>
        <Text style={styles.createAccountText}>CREATE ACCOUNT NOW!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Fullname</Text>
          <TextInput
            style={styles.input}
            value={fullname}
            onChangeText={setFullname}
            placeholder="Enter your full name"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
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

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone no</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            placeholderTextColor="#A0A0A0"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.dontHaveAccountText}>Back to </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 60,
  },
  createAccountText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: "#80ED99",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    marginHorizontal: width > 400 ? 50 : 30,
    alignItems: "center",
  },
  signUpButtonText: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    color: "black",
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

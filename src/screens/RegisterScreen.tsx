import React from 'react';
import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomButton from '../components/Button';
import CustomInput from '../components/Input';
import { COLORS } from '../utils/theme';

const RegisterScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>CADASTRO</Text>
        </View>
        
        <View style={styles.formContainer}>
          <CustomInput placeholder="Nome" value="" onChangeText={() => {}} />
          <CustomInput placeholder="E-mail" value="" onChangeText={() => {}} keyboardType="email-address" />
          <CustomInput placeholder="Senha" value="" onChangeText={() => {}} secureTextEntry={true} />
          <CustomInput placeholder="Confirmar senha" value="" onChangeText={() => {}} secureTextEntry={true} />
          
          <CustomButton title="CADASTRAR" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
});

export default RegisterScreen;
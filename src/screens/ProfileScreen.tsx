import React from 'react';
import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomButton from '../components/Button';
import CustomInput from '../components/Input';
import { COLORS } from '../utils/theme';

const ProfileScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>PERFIL</Text>
        </View>
        
        <View style={styles.formContainer}>
          <CustomInput placeholder="Nome" value="João Silva" onChangeText={() => {}} />
          <CustomInput placeholder="E-mail" value="joao.silva@example.com" onChangeText={() => {}} keyboardType="email-address" />
          <CustomInput placeholder="Telefone" value="(11) 99999-9999" onChangeText={() => {}} keyboardType="phone-pad" />
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Configurações</Text>
            <CustomButton title="🔔 Notificações" onPress={() => navigation.navigate('Notifications')} />
            <CustomButton title="🔐 Privacidade" onPress={() => {}} />
            <CustomButton title="🌙 Tema" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre</Text>
            <CustomButton title="❓ Ajuda" onPress={() => navigation.navigate('Help')} />
            <CustomButton title="ℹ️ Sobre" onPress={() => navigation.navigate('About')} />
            <CustomButton title="📞 Suporte" onPress={() => {}} />
          </View>
          
          <CustomButton title="SAIR" onPress={() => {}} />
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
  section: {
    width: '100%',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
    marginLeft: 5,
  },
});

export default ProfileScreen;
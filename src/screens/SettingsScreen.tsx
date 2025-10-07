import React from 'react';
import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomButton from '../components/Button';
import { COLORS } from '../utils/theme';

const SettingsScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>CONFIGURAÇÕES</Text>
        </View>
        
        <View style={styles.menuContainer}>
          <CustomButton title="👤 Perfil" onPress={() => navigation.navigate('Profile')} />
          <CustomButton title="🔔 Notificações" onPress={() => navigation.navigate('Notifications')} />
          <CustomButton title="❓ Ajuda" onPress={() => navigation.navigate('Help')} />
          <CustomButton title="ℹ️ Sobre" onPress={() => navigation.navigate('About')} />
          <CustomButton title="Voltar" onPress={() => navigation.goBack()} />
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
  menuContainer: {
    width: '100%',
    maxWidth: 400,
  },
});

export default SettingsScreen;
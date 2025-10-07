import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';
import CustomButton from '../components/Button';

const AboutScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>SOBRE</Text>
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>PERIX</Text>
            <Text style={styles.infoText}>Versão 1.0.0</Text>
            <Text style={styles.infoText}>© 2025 PERIX Inc.</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recursos</Text>
            <CustomButton title="📝 Criação de relatórios" onPress={() => {}} />
            <CustomButton title="📂 Gerenciamento de relatórios" onPress={() => {}} />
            <CustomButton title="📤 Exportação de dados" onPress={() => {}} />
            <CustomButton title="🔐 Segurança e privacidade" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Desenvolvedores</Text>
            <CustomButton title="👨‍💻 Equipe de desenvolvimento" onPress={() => {}} />
            <CustomButton title="🤝 Colaboradores" onPress={() => {}} />
            <CustomButton title="📧 Contato" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Licenciamento</Text>
            <CustomButton title="📄 Termos de uso" onPress={() => {}} />
            <CustomButton title="🔒 Política de privacidade" onPress={() => {}} />
            <CustomButton title="⚖️ Licença MIT" onPress={() => {}} />
          </View>
          
          <CustomButton title="VOLTAR" onPress={() => navigation.goBack()} />
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
  contentContainer: {
    width: '100%',
    maxWidth: 400,
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
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
  button: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutScreen;
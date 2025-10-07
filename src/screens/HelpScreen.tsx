
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';
import CustomButton from '../components/Button';

const HelpScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>AJUDA</Text>
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
            <CustomButton title="📝 Como criar um relatório?" onPress={() => {}} />
            <CustomButton title="📂 Como visualizar relatórios salvos?" onPress={() => {}} />
            <CustomButton title="📤 Como exportar relatórios?" onPress={() => {}} />
            <CustomButton title="🔐 Como alterar minha senha?" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tutoriais</Text>
            <CustomButton title="🎥 Tutorial completo" onPress={() => {}} />
            <CustomButton title="📚 Guia do usuário" onPress={() => {}} />
            <CustomButton title="💡 Dicas e truques" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Suporte</Text>
            <CustomButton title="📞 Central de atendimento" onPress={() => {}} />
            <CustomButton title="📧 Email de suporte" onPress={() => {}} />
            <CustomButton title="💬 Chat online" onPress={() => {}} />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informações</Text>
            <CustomButton title="📋 Termos de uso" onPress={() => {}} />
            <CustomButton title="🔒 Política de privacidade" onPress={() => {}} />
            <CustomButton title="📄 Versão do app" onPress={() => {}} />
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
    marginBottom: 
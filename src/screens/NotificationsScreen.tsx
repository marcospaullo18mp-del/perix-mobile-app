import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';
import CustomButton from '../components/Button';

const NotificationsScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>NOTIFICAÇÕES</Text>
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.notificationSection}>
            <Text style={styles.sectionTitle}>Novas notificações</Text>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationIcon}>
                <Text style={styles.notificationIconText}>📝</Text>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>Novo relatório criado</Text>
                <Text style={styles.notificationText}>Seu relatório "Relatório Mensal" foi criado com sucesso.</Text>
                <Text style={styles.notificationTime}>2 horas atrás</Text>
              </View>
            </View>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationIcon}>
                <Text style={styles.notificationIconText}>📂</Text>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>Relatório aprovado</Text>
                <Text style={styles.notificationText}>Seu relatório "Auditoria Interna" foi aprovado pela equipe.</Text>
                <Text style={styles.notificationTime}>1 dia atrás</Text>
              </View>
            </View>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationIcon}>
                <Text style={styles.notificationIconText}>🔔</Text>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>Lembrete de exportação</Text>
                <Text style={styles.notificationText}>Você tem 3 relatórios prontos para exportação.</Text>
                <Text style={styles.notificationTime}>3 dias atrás</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.notificationSection}>
            <Text style={styles.sectionTitle}>Configurações</Text>
            <CustomButton title="🔔 Ativar notificações" onPress={() => {}} />
            <CustomButton title="🔇 Desativar notificações" onPress={() => {}} />
            <CustomButton title="⚙️ Configurar alertas" onPress={() => {}} />
            <CustomButton title="📧 Email notificações" onPress={() => {}} />
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
  notificationSection: {
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
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationIconText: {
    fontSize: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  notificationText: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: COLORS.text,
    opacity: 0.7,
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

export default NotificationsScreen;
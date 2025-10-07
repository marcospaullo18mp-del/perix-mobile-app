import React from 'react';
import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomButton from '../components/Button';
import CustomInput from '../components/Input';
import FileUpload from '../components/FileUpload';
import { COLORS } from '../utils/theme';

const CreateReportScreen = ({ navigation }: { navigation: any }) => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>CRIAR RELATÓRIO</Text>
        </View>
        
        <View style={styles.formContainer}>
          <CustomInput placeholder="Título" value="" onChangeText={() => {}} />
          <CustomInput placeholder="Campo de dados" value="" onChangeText={() => {}} />
          <CustomInput placeholder="Evidências" value="" onChangeText={() => {}} multiline={true} numberOfLines={4} />
          
          <FileUpload
            onFileSelect={() => {}}
            placeholder="INSERIR IMAGEM OU ARQUIVO"
          />
          
          <CustomButton title="CRIAR RELATÓRIO" onPress={() => {}} />
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

export default CreateReportScreen;
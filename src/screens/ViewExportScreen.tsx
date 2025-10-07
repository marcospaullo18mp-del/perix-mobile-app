import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { COLORS } from '../utils/theme';
import CustomInput from '../components/Input';
import CustomButton from '../components/Button';
import Header from '../components/Header';
import { FileUpload } from '../components/FileUpload';
import FadeInView from '../components/FadeInView';

const ViewExportScreen = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState('');
  const [dataField, setDataField] = useState('');
  const [evidence, setEvidence] = useState<string[]>([]);

  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('É necessário permissão para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newEvidence = result.assets.map(asset => asset.uri);
      setEvidence([...evidence, ...newEvidence]);
    }
  };

  const handleExport = async () => {
    try {
      if (Platform.OS === 'web') {
        alert('Exportação não disponível na versão web');
        return;
      }

      const isAvailable = await Sharing.isAvailableAsync();
      
      if (!isAvailable) {
        alert('Compartilhamento não está disponível neste dispositivo');
        return;
      }

      // Aqui você pode implementar a lógica de exportação
      // Por exemplo, criar um PDF ou documento com os dados
      const exportData = {
        title,
        dataField,
        evidence,
        timestamp: new Date().toISOString(),
      };

      const fileContent = JSON.stringify(exportData, null, 2);
      const fileUri = `${FileSystem.documentDirectory}export_${Date.now()}.json`;
      
      await FileSystem.writeAsStringAsync(fileUri, fileContent);
      await Sharing.shareAsync(fileUri);

    } catch (error) {
      console.error('Erro ao exportar:', error);
      alert('Erro ao exportar os dados. Tente novamente.');
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Header
          title="Visualizar/Exportar"
          navigation={navigation}
          showBackButton
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <FadeInView>
            <View style={styles.formContainer}>
              <CustomInput
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
              />

              <CustomInput
                placeholder="Campo de dados"
                value={dataField}
                onChangeText={setDataField}
                multiline
                numberOfLines={4}
                style={styles.input}
              />

              <View style={styles.evidenceContainer}>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={handleImagePick}
                >
                  <Image 
                    source={require('../../assets/upload-icon.png')}
                    style={styles.uploadIcon}
                  />
                  <CustomInput
                    placeholder="INSERIR IMAGEM OU ARQUIVO"
                    value=""
                    onChangeText={() => {}}
                    style={styles.uploadInput}
                    editable={false}
                  />
                </TouchableOpacity>

                <ScrollView horizontal style={styles.evidenceScroll}>
                  {evidence.map((uri, index) => (
                    <Image
                      key={index}
                      source={{ uri }}
                      style={styles.evidenceImage}
                    />
                  ))}
                </ScrollView>
              </View>

              <CustomButton
                title="EXPORTAR"
                onPress={handleExport}
                style={styles.exportButton}
              />
            </View>
          </FadeInView>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  input: {
    marginBottom: 20,
  },
  evidenceContainer: {
    marginBottom: 20,
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 8,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.primary,
    marginBottom: 10,
  },
  uploadInput: {
    textAlign: 'center',
    color: COLORS.primary,
    borderWidth: 0,
  },
  evidenceScroll: {
    flexDirection: 'row',
    marginTop: 10,
  },
  evidenceImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  exportButton: {
    marginTop: 20,
  },
});

export default ViewExportScreen;
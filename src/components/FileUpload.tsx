import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { COLORS } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

interface FileUploadProps {
  onFileSelect: (file: any) => void;
  onFileRemove?: () => void;
  selectedFile?: any;
  placeholder?: string;
  multiple?: boolean;
  accept?: string;
  style?: any;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  onFileRemove,
  selectedFile,
  placeholder = 'INSERIR IMAGEM OU ARQUIVO',
  multiple = false,
  accept = 'image/*',
  style,
}) => {
  const handleFileSelect = async () => {
    // Simulação de seleção de arquivo
    Alert.alert(
      'Selecionar Arquivo',
      'Escolha uma opção:',
      [
        {
          text: 'Câmera',
          onPress: () => {
            // Simular seleção de arquivo da câmera
            const mockFile = {
              name: 'foto.jpg',
              type: 'image/jpeg',
              uri: 'mock://foto.jpg',
              size: 1024000,
            };
            onFileSelect(mockFile);
          },
        },
        {
          text: 'Galeria',
          onPress: () => {
            // Simular seleção de arquivo da galeria
            const mockFile = {
              name: 'documento.pdf',
              type: 'application/pdf',
              uri: 'mock://documento.pdf',
              size: 2048000,
            };
            onFileSelect(mockFile);
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const handleFileRemove = () => {
    if (onFileRemove) {
      onFileRemove();
    }
  };

  const renderFilePreview = () => {
    if (!selectedFile) return null;

    if (selectedFile.type.startsWith('image/')) {
      return (
        <Image
          source={{ uri: selectedFile.uri }}
          style={styles.fileImage}
          resizeMode="cover"
        />
      );
    }

    return (
      <View style={styles.fileIcon}>
        <Ionicons name="document" size={24} color={COLORS.primary} />
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      {selectedFile ? (
        <View style={styles.selectedFile}>
          {renderFilePreview()}
          <View style={styles.fileInfo}>
            <Text style={styles.fileName} numberOfLines={1}>
              {selectedFile.name}
            </Text>
            <Text style={styles.fileSize}>
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </Text>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleFileRemove}
          >
            <Ionicons name="close-circle" size={24} color="#ff4444" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleFileSelect}
          activeOpacity={0.8}
        >
          <Ionicons name="cloud-upload" size={24} color={COLORS.primary} />
          <Text style={styles.uploadText}>{placeholder}</Text>
          <Text style={styles.uploadSubtext}>Toque para selecionar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  uploadButton: {
    width: '100%',
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
  },
  uploadText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 10,
  },
  uploadSubtext: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.7,
    marginTop: 5,
  },
  selectedFile: {
    width: '100%',
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
  },
  fileImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  fileIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  fileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  fileName: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fileSize: {
    fontSize: 12,
    color: COLORS.text,
    opacity: 0.7,
  },
  removeButton: {
    padding: 10,
  },
});

export default FileUpload;
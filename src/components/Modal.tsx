import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import { COLORS } from '../utils/theme';
import CustomButton from './Button';

interface ModalProps {
  visible: boolean;
  title?: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
  style?: any;
}

const CustomModal: React.FC<ModalProps> = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  showCancel = true,
  style,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const modalWidth = screenWidth * 0.9;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, { width: modalWidth }, style]}>
          {title && <Text style={styles.title}>{title}</Text>}
          <Text style={styles.message}>{message}</Text>
          
          <View style={styles.buttonContainer}>
            {showCancel && (
              <CustomButton
                title={cancelText}
                onPress={onCancel}
                style={styles.cancelButton}
              />
            )}
            <CustomButton
              title={confirmText}
              onPress={onConfirm}
              style={styles.confirmButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  confirmButton: {
    flex: 1,
  },
});

export default CustomModal;
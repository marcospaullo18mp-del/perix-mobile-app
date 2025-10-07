import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Cores do tema
const COLORS = {
  primary: '#d4af37',
  secondary: '#000',
  background: '#000',
  text: '#d4af37',
  accent: '#d4af37',
};

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, style, disabled = false }) => (
  <TouchableOpacity
    style={[styles.button, style, disabled && styles.buttonDisabled]}
    onPress={onPress}
    activeOpacity={0.8}
    disabled={disabled}
  >
    <LinearGradient
      colors={disabled ? ['#666', '#444'] : [COLORS.primary, '#b8941f']}
      style={styles.buttonGradient}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonDisabled: {
    opacity: 0.6,
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
  buttonTextDisabled: {
    color: '#666',
  },
});

export default CustomButton;
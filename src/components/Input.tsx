import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// Cores do tema
const COLORS = {
  primary: '#d4af37',
  secondary: '#000',
  background: '#000',
  text: '#d4af37',
  accent: '#d4af37',
};

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  style?: any;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  style,
}) => (
  <View style={[styles.inputContainer, style]}>
    <TextInput
      style={[styles.input, multiline && styles.inputMultiline]}
      placeholder={placeholder}
      placeholderTextColor={COLORS.text}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      color={COLORS.text}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#d4af37',
    borderRadius: 8,
    backgroundColor: 'transparent',
    color: '#d4af37',
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default CustomInput;
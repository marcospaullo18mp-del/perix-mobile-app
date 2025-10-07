import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onCheck: () => void;
  disabled?: boolean;
  style?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onCheck,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onCheck}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkbox,
          checked && styles.checked,
          disabled && styles.disabled,
        ]}
      >
        {checked && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </View>
      <Text
        style={[
          styles.label,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: COLORS.primary,
  },
  checkmark: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledLabel: {
    opacity: 0.5,
  },
});

export default Checkbox;
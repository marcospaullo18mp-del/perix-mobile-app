import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';

interface SwitchProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: any;
}

const CustomSwitch: React.FC<SwitchProps> = ({
  label,
  value,
  onValueChange,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.label,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
      <View
        style={[
          styles.switch,
          value && styles.switchOn,
          disabled && styles.disabled,
        ]}
      >
        <View
          style={[
            styles.switchThumb,
            value && styles.switchThumbOn,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
    marginRight: 15,
  },
  switch: {
    width: 50,
    height: 30,
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 2,
  },
  switchOn: {
    backgroundColor: COLORS.primary,
  },
  switchThumb: {
    width: 26,
    height: 26,
    backgroundColor: COLORS.secondary,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchThumbOn: {
    transform: [{ translateX: 18 }],
  },
  disabled: {
    opacity: 0.5,
  },
  disabledLabel: {
    opacity: 0.5,
  },
});

export default CustomSwitch;
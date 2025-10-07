import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
  style?: any;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'large',
  color = COLORS.primary,
  text,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={size === 'large' ? 'large' : 'small'}
        color={color}
      />
      {text && <Text style={[styles.text, { color }]}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoadingSpinner;
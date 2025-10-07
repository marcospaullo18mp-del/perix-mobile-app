import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';

interface HeaderProps {
  title: string;
  navigation: any;
  showBackButton?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  navigation,
  showBackButton = false,
  rightIcon,
  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && onRightPress ? (
        <TouchableOpacity style={styles.rightButton} onPress={onRightPress}>
          <Ionicons name={rightIcon} size={24} color={COLORS.text} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.2)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  backButton: {
    padding: 5,
  },
  rightButton: {
    padding: 5,
  },
  placeholder: {
    width: 34, // Same size as buttons for alignment
  },
});

export default Header;
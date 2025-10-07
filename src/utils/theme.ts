// Cores do tema
export const COLORS = {
  primary: '#d4af37',
  secondary: '#000',
  background: '#000',
  text: '#d4af37',
  accent: '#d4af37',
  textSecondary: '#b8941f',
  border: '#d4af37',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

// Tamanhos
export const SIZES = {
  padding: 15,
  margin: 15,
  borderRadius: 8,
  buttonHeight: 50,
  inputHeight: 50,
  logoSize: 150,
  fontSize: {
    small: 12,
    medium: 16,
    large: 18,
    xlarge: 24,
    xxlarge: 32,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
    xxlarge: 48,
  },
};

// Tipografia
export const TYPOGRAPHY = {
  fontFamily: {
    regular: 'Arial',
    bold: 'Arial-Bold',
    light: 'Arial-Light',
  },
  fontWeight: {
    regular: 'normal',
    bold: 'bold',
    light: 'lighter',
  },
};

// Animações
export const ANIMATIONS = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Layout
export const LAYOUT = {
  maxWidth: 400,
  maxHeight: 800,
  safeArea: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
};

// Temas
export const THEMES = {
  dark: {
    background: COLORS.background,
    text: COLORS.text,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    border: COLORS.border,
  },
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    border: COLORS.border,
  },
};

// Funções utilitárias
export const getTheme = (isDark: boolean = true) => {
  return isDark ? THEMES.dark : THEMES.light;
};

export const getFontSize = (size: keyof typeof SIZES.fontSize) => {
  return SIZES.fontSize[size];
};

export const getSpacing = (size: keyof typeof SIZES.spacing) => {
  return SIZES.spacing[size];
};

export const getShadow = (elevation: number = 2) => {
  return {
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: elevation,
    },
    shadowOpacity: 0.3,
    shadowRadius: elevation,
    elevation: elevation,
  };
};

export const getBorderRadius = (size: keyof typeof SIZES.spacing = 'medium') => {
  return SIZES.borderRadius;
};

export const getButtonStyle = (disabled: boolean = false) => {
  return {
    height: SIZES.buttonHeight,
    borderRadius: SIZES.borderRadius,
    opacity: disabled ? 0.6 : 1,
  };
};

export const getInputStyle = (error: boolean = false) => {
  return {
    height: SIZES.inputHeight,
    borderColor: error ? COLORS.error : COLORS.border,
    borderRadius: SIZES.borderRadius,
  };
};
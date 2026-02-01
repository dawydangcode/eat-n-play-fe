export const COLORS = {
  // Primary colors
  primary: '#1DA1F2',
  secondary: '#14171A',

  // Dark theme
  background: '#000000',
  surface: '#16181C',
  card: '#1C1F23',

  // Text colors
  text: '#FFFFFF',
  textSecondary: '#8B98A5',
  textMuted: '#6B7280',

  // Border & divider
  border: '#2F3336',
  divider: '#38444D',

  // Status colors
  success: '#00BA7C',
  error: '#F4212E',
  warning: '#FFD400',
  info: '#1DA1F2',

  // Social colors
  google: '#DB4437',
  facebook: '#1877F2',
  apple: '#FFFFFF',
  email: '#1DA1F2',

  // Transparent
  overlay: 'rgba(0, 0, 0, 0.5)',
  transparent: 'transparent',
};

export const SIZES = {
  // Font sizes
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,

  // Spacing
  padding: 16,
  margin: 16,
  radius: 24,

  // Border
  borderWidth: 1,
  borderRadius: 8,
  buttonRadius: 24,
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  semiBold: 'System',
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
  },
};

const theme = {
  COLORS,
  SIZES,
  FONTS,
  SHADOWS,
};

export default theme;

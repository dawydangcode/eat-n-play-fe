const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Thêm các extensions cho TypeScript
config.resolver.sourceExts.push('tsx', 'ts');

// Cấu hình transformer cho TypeScript
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
};

// Cấu hình cho alias paths nếu cần
config.resolver.alias = {
  '@': './src',
  '@components': './src/components',
  '@screens': './src/screens',
  '@navigation': './src/navigation',
  '@api': './src/api',
  '@utils': './src/utils',
  '@hooks': './src/hooks',
  '@config': './src/config',
  '@constants': './src/constants',
  '@context': './src/context',
};

module.exports = config;

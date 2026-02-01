module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
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
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};

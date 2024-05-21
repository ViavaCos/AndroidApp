const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
// const { assertExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // transformer: {
  //   babelTransformerPath: require.resolve('react-native-svg-transformer')
  // },
  // resolver: {
  //   assetExts: assertExts.filter((ext) => ext !== 'svg'),
  //   sourceExts: [...sourceExts, 'svg']
  // },
};

module.exports = mergeConfig(defaultConfig, config);

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: ['react-native-reanimated/plugin'],
// };
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['react-native-reanimated/plugin', {relativeSourceLocation: true,},]],
  plugins: [['module-resolver',{alias: {assets: './src/assets',},},] ],
};
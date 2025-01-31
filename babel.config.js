// module.exports = {
//   presets: [
//     require.resolve('@babel/preset-env'),
//     require.resolve('@babel/preset-react'),
//     require.resolve('@babel/preset-typescript'),
//   ],
//   plugins: [
//     ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
//     ['@babel/plugin-proposal-private-methods', { loose: false }],
//     ['@babel/plugin-proposal-class-properties', { loose: false }],
//   ],
// };

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    require.resolve('@babel/preset-react'),
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
};

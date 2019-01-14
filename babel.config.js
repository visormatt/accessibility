/**
 * @external https://goo.gl/Fn6wVN
 * @description New in Babel 7.x, Babel has as concept of a "root" directory, which
 * defaults to the current working directory. For project-wide configuration, Babel
 * will automatically search for a "babel.config.js" in this root directory.
 * Alternatively, users can use an explicit "configFile" value to override the
 * default config file search behavior.
 *
 *   https://goo.gl/ZXnsSD ~ "loose" option on proposal-class-properties plugin
 *
 */
module.exports = function(api) {
  if (api) api.cache(true);

  const plugins = ['@babel/plugin-transform-async-to-generator'];
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-typescript'
  ];

  return {
    plugins,
    presets
  };
};

const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

module.exports = function (api) {
  api.cache(true);

  const env = process.env.NODE_ENV;
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal',
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ];

  switch (env) {
    case ENV.DEVELOPMENT:
      break;
    case ENV.PRODUCTION:
      break;
  }

  return {
    presets,
    plugins,
  };
};

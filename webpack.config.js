const path = require('path');

const PROJECT_DIR = path.resolve(__dirname);
const SRC_DIR = path.join(PROJECT_DIR, 'src');
const OUT_DIR = path.join(PROJECT_DIR, 'lib');

/**
 * @type {import('webpack').Configuration}
 */
const commonjsConfig = {
  externals: {
    axios: 'axios',
    // https: "require('https')",
    https: 'https',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  entry: {
    cjs: path.join(SRC_DIR, 'entry', 'cjs.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  output: {
    path: OUT_DIR,
    filename: 'index.cjs.js',
    library: {
      type: 'commonjs',
    },
  },
};

/**
 * @type {import('webpack').Configuration}
 */
const esmConfig = {
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  entry: {
    esm: path.join(SRC_DIR, 'entry', 'esm.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: OUT_DIR,
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
  },
};

/**
 * @type {import('webpack').Configuration}
 */
const umdConfig = {
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  entry: {
    umd: path.join(SRC_DIR, 'entry', 'esm.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  output: {
    path: OUT_DIR,
    filename: 'index.umd.js',
    library: {
      name: 'GithubHttpApi',
      type: 'umd',
    },
  },
};

module.exports = [commonjsConfig, esmConfig, umdConfig];

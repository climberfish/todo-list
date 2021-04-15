module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.d.ts', '.ts'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
}
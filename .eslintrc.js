module.exports = {
  'env': {
    'es2022': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'brace-style': 'error',
    'no-var': 'error',
    'no-trailing-spaces': 'error',
    'array-bracket-spacing': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'object-shorthand': 'error',
    'prefer-destructuring': 'error'
  }
};

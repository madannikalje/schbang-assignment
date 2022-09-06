
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  root: true,
  env: {
      node: true,
      jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'space-before-function-paren': 0,
      'space-in-parens': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'always'],
  },
};
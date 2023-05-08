module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts*', '*.d.ts*'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: {
              memberTypes: [
                'signature',
                'call-signature',
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-decorated-field',
                'protected-decorated-field',
                'private-decorated-field',
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'public-abstract-field',
                'protected-abstract-field',
                'public-field',
                'protected-field',
                'private-field',
                'static-field',
                'instance-field',
                'abstract-field',
                'decorated-field',
                'field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'constructor',
                ['public-static-get', 'public-static-set'],
                ['protected-static-get', 'protected-static-set'],
                ['private-static-get', 'private-static-set'],
                ['public-decorated-get', 'public-decorated-set'],
                ['protected-decorated-get', 'protected-decorated-set'],
                ['private-decorated-get', 'private-decorated-set'],
                ['public-instance-get', 'public-instance-set'],
                ['protected-instance-get', 'protected-instance-set'],
                ['private-instance-get', 'private-instance-set'],
                ['public-abstract-get', 'public-abstract-set'],
                ['protected-abstract-get', 'protected-abstract-set'],
                ['public-get', 'public-set'],
                ['protected-get', 'protected-set'],
                ['private-get', 'private-set'],
                ['static-get', 'static-set'],
                ['instance-get', 'instance-set'],
                ['abstract-get', 'abstract-set'],
                ['decorated-get', 'decorated-set'],
                'get',
                'set',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',
                'public-abstract-method',
                'protected-abstract-method',
                'public-method',
                'protected-method',
                'private-method',
                'static-method',
                'instance-method',
                'abstract-method',
                'decorated-method',
                'method',
              ],
              order: 'alphabetically',
            },
          },
        ],
        '@typescript-eslint/no-floating-promises': ['warn'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/semi': ['warn', 'never'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['*.d.ts*', '*.ts*'],
    },
  },
}

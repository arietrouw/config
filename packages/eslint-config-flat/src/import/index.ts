import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export const importConfig = [
  {
    plugins: { import: importPlugin, 'simple-import-sort': simpleImportSort },
    rules: {
      'import/default': ['off'],
      'import/named': ['off'],
      'import/namespace': ['off'],
      'import/no-absolute-path': ['warn'],
      'import/no-cycle': [
        'warn',
        {
          maxDepth: 2,
        },
      ],
      'import/no-default-export': ['warn'],
      'import/no-deprecated': ['warn'],
      'import/no-internal-modules': ['warn'],
      'import/no-named-as-default': ['warn'],
      'import/no-named-as-default-member': ['off'],
      'import/no-restricted-paths': ['warn'],
      'import/no-self-import': ['warn'],
      'import/no-useless-path-segments': ['warn'],
      'simple-import-sort/exports': ['warn'],
      'simple-import-sort/imports': ['warn'],
    },
  },
]

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginImport from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'prismicio-types.d.ts']
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    plugins: {
      import: eslintPluginImport
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Built-in types (e.g., 'react')
            'external', // External dependencies (e.g., 'lodash')
            'internal', // Internal imports (e.g., '@/components')
            'parent', // Parent directory imports
            'sibling', // Sibling directory imports
            'index' // Index file imports
          ],
          'newlines-between': 'always', // Add newlines between groups
          alphabetize: {
            order: 'asc', // Sort in ascending order
            caseInsensitive: true // Case-insensitive sorting
          }
        }
      ]
    }
  }
];

export default eslintConfig;

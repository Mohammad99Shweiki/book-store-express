import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
   { ignores: ['dist', 'node_modules'] },
   { files: ['**/*.{ts}'] },
   { languageOptions: { globals: globals.node } },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   {
      rules: {
         'no-console': 'warn',
         curly: 'warn',
         '@typescript-eslint/no-explicit-any': 'warn',
         '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
         ],
         '@typescript-eslint/explicit-function-return-type': 'off',
         '@typescript-eslint/no-inferrable-types': 'error',
         // '@typescript-eslint/ban-ts-comment': 'warn',
         semi: ['error', 'always'],
         quotes: ['error', 'single'],
         indent: ['error', 3],
         'import/no-extraneous-dependencies': 'off',
      },
   },
];

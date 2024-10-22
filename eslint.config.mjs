import {
  baseConfig,
  javaScriptConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  supportedFileTypes,
  supportedExtensions,
} from '@alexey-koran/eslint-config';
import typescriptEslint from 'typescript-eslint';

const config = [
  baseConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  {
    ...javaScriptConfig,
    files: [supportedFileTypes.js, supportedFileTypes.ts],
  },
  {
    files: [supportedFileTypes.js, supportedFileTypes.ts],
    rules: {
      '@typescript-eslint/naming-convention': [
        ...typeScriptBaseConfig.rules['@typescript-eslint/naming-convention'],
        {
          selector: 'typeProperty',
          format: ['strictCamelCase', 'UPPER_CASE'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
      ],
    },
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          defaultProject: './tsconfig.json',
        },
      },
    },
    settings: {
      'import/extensions': supportedExtensions.js,
      'import/parsers': {
        '@typescript-eslint/parser': [...supportedExtensions.ts],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          paths: ['src'],
          extensions: supportedExtensions.js,
        },
      },
    },
  },
  {
    // The new config system no longer supports .eslintignore files
    // https://eslint.org/blog/2022/10/eslint-v8.25.0-released/#highlights
    ignores: ['build'],
  },
];

export default config;

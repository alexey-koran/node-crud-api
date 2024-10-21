import {
  baseConfig,
  javaScriptConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  supportedFileTypes,
  supportedExtensions,
} from '@alexey-koran/eslint-config';

const config = [
  baseConfig,
  javaScriptConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  {
    files: [supportedFileTypes.js, supportedFileTypes.ts],
    settings: {
      'import/extensions': supportedExtensions.js,
      'import/parsers': {
        '@typescript-eslint/parser': [...supportedExtensions.ts, ...supportedExtensions.tsx],
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

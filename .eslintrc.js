module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: {
      globals: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['.'],
      },
    },
  },
  globals: {
    NodeJS: true,
  },
  rules: {
    // Allow .js files to use JSX syntax until project is migrated to TypeScript
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],

    // Max line length
    'max-len': [
      'error',
      {
        code: 90,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],

    // Import order
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],

    // Fix requirement to add extensions to import files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Allow absolute paths
    'import/no-absolute-path': ['error', {
      commonjs: false,
      amd: false,
      esmodule: false,
    }],

    // Allow pasting raw HTML
    'react/no-danger': 'off',

    // Allow usage of snake_case for API response data
    camelcase: 'off',

    // Don't use propTypes
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // Remove all false-positives
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow any type except in ...rest
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    // Allow to connect label by EITHER using id or nesting
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],

    '@typescript-eslint/explicit-function-return-type': 'off',

    // Allow props spreading
    'react/jsx-props-no-spreading': 'off',

    // React hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // Allow class components
    'react/prefer-stateless-function': [0],

    // Fix storybook ESLint bug
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
};

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'airbnb',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'functions'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off',
        'import/no-absolute-path': 'off',
        'no-unresolved': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    },
};
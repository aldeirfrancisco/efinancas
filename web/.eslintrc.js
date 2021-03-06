module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      __DEV__: 'readonly'
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
      "linebreak-style": 0,
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/forbid-prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": 'off',
      "prettier/prettier": "error",
      "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "no-console": ["error", { allow: ["tron"] }]
    }
  }

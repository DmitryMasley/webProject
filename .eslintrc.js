module.exports = {
    parser: "babel-eslint",
    extends: "airbnb",
    ecmaFeatures: {
        jsx: true
    },
    plugins: [
        "react",
        "jsx-a11y",
        "import",
        "flowtype"
    ],
    rules: {
        indent: ["error", 4, { "SwitchCase": 1 }],
        quotes: ["error", "double"],
        "comma-dangle": ["error", "never"],
        "space-before-function-paren": ["off", "never"],
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "no-param-reassign": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-indent": ["error", 4],
        "react/require-default-props": "off",
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "react/jsx-boolean-value": "off",
        "react/no-unused-prop-types": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/img-has-alt": "off",
        "class-methods-use-this": "off",
        "flowtype/define-flow-type": 1
    },
    env: {
        browser: true,
        commonjs: true,
        mocha: true
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: false
        },
        "import/resolver": "webpack"
    },
    globals: {
        i18n: false
    }
};

if (process.env.NODE_ENV === "test") {
    module.exports.env.mocha = true;
    module.exports.rules["react/no-find-dom-node"] = "off";
}

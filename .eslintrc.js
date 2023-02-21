module.exports = {
    extends: ["plugin:vue/vue3-recommended", "@vue/eslint-config-typescript"],
    plugins: ["vue"],
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "no-trailing-spaces": ["error"],
        "object-curly-spacing": ["error", "always"],
        quotes: ["error", "double"],
        "quote-props": ["error", "as-needed"],
        semi: ["error", "always"],
        "vue/multi-word-component-names": "off",
        "vue/no-deprecated-slot-attribute": "off",
        "vue/require-default-prop": "off",
        "vue/no-setup-props-destructure": "off",
        "vue/html-indent": ["error", 4, { baseIndent: 1 }],
        "vue/script-indent": ["error", 4, { baseIndent: 0 }],
    },
};

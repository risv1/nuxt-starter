import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "vue/require-default-prop": "off",
    "vue/html-self-closing": "off",
  },
});

export default {
  "*.{js,ts,vue,mjs}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md,html,yaml,yml}": ["prettier --write"],
  "!.nuxt/**/*": [],
  "!node_modules/**/*": [],
};

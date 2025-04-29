import { defineConfig, presetAttributify, presetWind } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      satoshi: "Satoshi-Variable",
    },
  },
  presets: [presetWind(), presetAttributify()],
});

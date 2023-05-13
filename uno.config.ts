import { defineConfig,presetUno,presetAttributify,presetWind } from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetWind()
    ],
});
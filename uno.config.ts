import { presetIcons,defineConfig,presetUno,presetAttributify,presetWind } from "unocss";

export default defineConfig({
    theme: {
        colors:{
            primary: "#00dc82",
        }
    },
    shortcuts: [
        ["w-h-full","w-full h-full"],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetWind(),
        presetIcons(),
    ],
});
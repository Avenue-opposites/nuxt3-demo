import { 
    presetIcons,
    defineConfig,
    presetUno,
    presetAttributify,
    presetWind,
    presetTagify
 } from "unocss";

export default defineConfig({
    theme: {
        colors:{
            primary: "#00dc82",
        }
    },
    shortcuts: [
        ["btn","transition-colors active:outline outline-green-300 border-none rounded-1 text-6 px-6 py-1 bg-primary hover:bg-green-600"],
        [/^w-h-(\d+)$/,([_,s]) => `w-${s} h-${s}`]
    ],
    presets: [
        presetUno(),
        presetTagify(),
        presetAttributify(),
        presetWind(),
        presetIcons(),
    ],
});
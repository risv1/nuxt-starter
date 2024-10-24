import { defineConfig, presetAttributify, presetUno } from "unocss"

export default defineConfig({
    theme: {
        fontFamily: {
            satoshi: 'Satoshi-Variable'
        }  
    },
    presets: [
        presetUno(),
        presetAttributify(),
    ],
    preflights: [
        {
            getCSS() {
                return `
                    @font-face {
                        font-family: 'Satoshi-Variable';
                        src: url('/fonts/Satoshi-Variable.ttf') format('trueType');
                        font-weight: 100 900;
                        font-style: normal;
                        font-display: swap;
                    }

                    body {
                        margin: 0;
                        padding: 0;
                    }
                `
            }
        }
    ]
})
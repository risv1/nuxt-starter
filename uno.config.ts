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

                    .border {
                        border-width: 1px;
                        border-style: solid;
                    }

                    .border-2 {
                        border-width: 2px;
                        border-style: solid;
                    }

                    .border-4 {
                        border-width: 4px;
                        border-style: solid;
                    }
                `
            }
        }
    ]
})
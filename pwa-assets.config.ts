import {
  defineConfig,
  minimal2023Preset as preset,
  type Preset,
} from "@vite-pwa/assets-generator/config";

const minimalPresetNoPadding: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    favicons: [[48, "favicon.ico"]],
    padding: 0,
  },
  maskable: {
    sizes: [512],
    padding: 0,
  },
  apple: {
    sizes: [152, 180],
    padding: 0,
  },
};

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: minimalPresetNoPadding,
  images: ["public/logo.png"],
});

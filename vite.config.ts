import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/renderDesk/",
  assetsInclude: ["**/*.gltf", "**/*.glb"],
  plugins: [checker({ typescript: true })],
  worker: {},
  build: {
    sourcemap: false,
  },
  server: {
    open: true,
    port: 1234,
    host: "localhost",
  },
}));

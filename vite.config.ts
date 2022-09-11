import * as path from "path";
import {defineConfig} from "vite";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
  },
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import * as process from "process";
import { env } from "process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: readFileSync(`${__dirname}/localhost-key.pem`),
      cert: readFileSync(`${__dirname}/localhost.pem`),
    },
  },
});

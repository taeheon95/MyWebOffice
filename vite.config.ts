import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import * as process from "process";
import { env } from "process";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      https: {
        key: readFileSync(`${__dirname}/${env.VITE_HTTPS_CERT_NAME}-key.pem`),
        cert: readFileSync(`${__dirname}/${env.VITE_HTTPS_CERT_NAME}.pem`),
      },
    },
  };
});

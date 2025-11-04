import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 4001,
    origin: "http://localhost:4001",
  },
  preview: {
    port: 4001,
  },
  base: mode === "development" ? "/" : "http://localhost:4001/",
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
}));

import { defineConfig } from "vite";

import svgr from "vite-plugin-svgr";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  /**
   * Defines global constant replacments
   * @see https://vitejs.dev/config/shared-options.html#define
   */
  define: {
    global: (() => {
      let globalVariable = "globalThis";
      try {
        // Try to import @safe-global/safe-apps-provider
        require.resolve("@safe-global/safe-apps-provider");
        // Try to import @safe-global/safe-apps-sdk
        require.resolve("@safe-global/safe-apps-sdk");
        // If both modules are found, return the custom global variable
        globalVariable = "global";
      } catch (e) {
        // If either module is not found, fallback to globalThis
        globalVariable = "globalThis";
      }
      return globalVariable;
    })(),
  },
  resolve: {
    /**
     * Polyfills nodejs imports
     * @see https://vitejs.dev/config/shared-options.html#resolve-alias
     */
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  plugins: [
    react(),
    mkcert(),
    //@ts-ignore
    svgr({
      svgrOptions: {
        namedExport: "RC",
      },
    }),
    VitePWA({
      includeAssets: [
        "assets/favicon.ico",
        "assets/logo.svg",
        "assets/logo-64.png",
        "assets/logo-310.png",
        "assets/waves.png",
        "assets/world.png",
        "assets/profile.png",
      ],
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Dapp",
        short_name: "Dapp",
        icons: [
          {
            src: "assets/logo-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "assets/logo-310.png",
            sizes: "192X192",
            type: "image/png",
          },
          {
            src: "assets/logo-310.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        scope: "/",
        display: "fullscreen",
        orientation: "portrait-primary",
        theme_color: "#e9e3dd",
        background_color: "#191c1c",
        shortcuts: [
          {
            name: "Synths",
            description: "View your synths and waves",
            url: "/synths",
            icons: [
              {
                src: "assets/waves.png",
                sizes: "64x64",
                type: "image/png",
              },
            ],
          },
          {
            name: "Explore",
            description: "Explore the World",
            url: "/world",
            icons: [
              {
                src: "assets/qr.png",
                sizes: "64x64",
                type: "image/png",
              },
            ],
          },
          {
            name: "Profile",
            description: "View accomplishments and stats",
            url: "/profile",
            icons: [
              {
                src: "assets/profile.png",
                sizes: "64x64",
                type: "image/png",
              },
            ],
          },
        ],
        related_applications: [
          {
            platform: "webapp",
            url: "https://dapp.app/manifest.webmanifest",
          },
        ],
        categories: [],
      },
    }),
  ],
});

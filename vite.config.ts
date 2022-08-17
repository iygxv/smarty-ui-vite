/// <reference types="vitest" />
import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};


export default defineConfig({
  // root: path.resolve(__dirname), // index.html文件所在的文件夹
  server: {
    port: 3000, 
    open: true
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
     // 添加UnoCSS插件
     Unocss()
  ],
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // environment: "jsdom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
})
import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import Markdown from "vite-plugin-react-markdown";
import hljs from 'highlight.js';
import tailwindcss from 'tailwindcss';


export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.tsx',
        // 'resources/css/tailwindcss.css',
        'resources/css/app.css',
        'resources/scss/app.scss'
      ],
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    Markdown({
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
          }
          return ''; // gunakan default escape
        }
      },
      wrapperClasses:'app-markdown',
    }),
    react(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});

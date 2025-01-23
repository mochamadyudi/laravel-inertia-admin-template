import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import Markdown from "vite-plugin-react-markdown";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Atau gaya lain yang Anda inginkan

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.tsx',
        'resources/scss/app.scss',
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
});

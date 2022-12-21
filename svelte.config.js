import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter({
      pages: 'public',
      assets: 'public',
      fallback: null,
      precompress: false
    })
  }
};

export default config;

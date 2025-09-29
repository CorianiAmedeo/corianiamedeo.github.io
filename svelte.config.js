import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html' // SPA fallback
    }),
    paths: {
      base: ''
    },
    prerender: {
      entries: ['*'] // pre-render all pages
    }
  }
};

export default config;

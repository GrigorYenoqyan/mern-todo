/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/public/**/*.html',
    './**/src/**/*.html',
    './**/src/**/*.js',
    './**/src/**/*.ts',
    './**/src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'default-blue': '#243c5a',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

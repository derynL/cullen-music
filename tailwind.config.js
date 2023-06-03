/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}',
    './public/**/*.html',
    './app/**/*.{ts,tsx}',
  ],
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
  theme: {},
};

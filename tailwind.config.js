import 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/App.vue',
        './src/{pages,components}/*.{vue,js,ts,jsx,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    ],
    // https://tailwindcss.com/docs/theme
    theme: {
        extend: {},
    },
    plugins: ['flowbite/plugin'],
};

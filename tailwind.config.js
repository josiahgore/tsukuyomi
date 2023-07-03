/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/App.vue', './src/{pages,components}/*.{vue,js,ts,jsx,tsx}'],
    // https://tailwindcss.com/docs/theme
    theme: {
        extend: {},
    },
    plugins: [],
};

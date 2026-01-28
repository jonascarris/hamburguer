/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}", // In case I put components in root
        "./pages/**/*.{js,ts,jsx,tsx}" // In case pages are in root
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c', // Rede Laranja brand?
                    800: '#9a3412',
                    900: '#7c2d12',
                }
            }
        },
    },
    plugins: [],
}

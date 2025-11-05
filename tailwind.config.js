module.exports = {
    darkMode: "class", // Enable dark mode via class
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // ... other config
    theme: {
        extend: {
            animation: {
                'marquee-y': 'marquee-y 30s linear infinite',
                'marquee-y-reverse': 'marquee-y-reverse 30s linear infinite',
            },
            keyframes: {
                'marquee-y': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                'marquee-y-reverse': {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
            },
        },
    },
    plugins: [],
};

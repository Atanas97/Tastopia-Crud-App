/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#c6a87d",
                secondaryColor: "#101418",
                darkColor: "#080b0e",
                greyColor: "#777777",
                textColor: "#ffffffcc",
            },
        },
        listStyleImage: {
            checkmark: 'url("/src/assets/svg/li_marker.svg")',
        },
        // keyframes: {
        //     bob: {
        //         "0%": { transform: "translateY(-8px)" },
        //         "50%": { transform: "translateY(-4px)" },
        //         "100%": { transform: "translateY(-8px)" },
        //     },
        // },
        // animation: {
        //     bob: "bob 1s ease-in-out infinite",
        // },
    },
    plugins: [require("preline/plugin"), "prettier-plugin-tailwindcss"],
};

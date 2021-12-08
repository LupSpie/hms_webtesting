module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    100: "#292534",
                    200: "#657786",
                    300: "#aab8c2",
                    400: "#e1e8ed",
                    450: "#001220",
                    500: "#f5f8fa",
                    800: "#534B60",
                    900: "#312733",
                },
                brand: {
                    100: "#9388a2",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

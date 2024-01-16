export const tokenDark = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000" // manually adjusted
    },
    primary: {
        //blue
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        //yellow
        50: "#f0f0f0",
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",

    }
};

//function that reverses the color palette
const reversesTokens = (tokenDark) => {
    const reversesTokens = {};
    Object.entries(tokenDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversesTokens[key] = reversedObj;
    });
    return reversesTokens;
}
export const tokenLight = reversesTokens(tokenDark);

//mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    //palette values for dark mode
                    primary: {
                        ...tokenDark.primary,
                        main: tokenDark.primary[400],
                        light: tokenDark.primary[400],
                    },
                    secondary: {
                        ...tokenDark.secondary,
                        main: tokenDark.secondary[300],
                    },
                    neutral: {
                        ...tokenDark.grey,
                        main: tokenDark.grey[500],
                    },
                    background: {
                        default: tokenDark.primary[600],
                        alt: tokenDark.primary[500],
                    },
                }
                :
                {
                    //palette values for light mode
                    primary: {
                        ...tokenDark.primary,
                        main: tokenDark.grey[50],
                        light: tokenDark.grey[100],
                    },
                    secondary: {
                        ...tokenLight.secondary,
                        main: tokenDark.secondary[600],
                        light: tokenDark.secondary[700],
                    },
                    neutral: {
                        ...tokenDark.grey,
                        main: tokenDark.grey[500],
                    },
                    background: {
                        default: tokenDark.grey[0],
                        alt: tokenDark[50],
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
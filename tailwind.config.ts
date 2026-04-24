import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        // Figma breakpoints: Mobile (0–768px) and Desktop (1024px+)
        sm: "0px",    // Mobile-first; `sm:` applies from 0–768px
        md: "768px",  // Tablet boundary
        lg: "1024px", // Desktop boundary (default/no prefix)
      },
      fontSize: {
        // Responsive font sizes from Figma Variables.
        // Default (desktop) / sm: (mobile) pairs per Figma panel.
        "font-100": ["14px", { lineHeight: "16px" }],         // Label/S 16px line-height
        "font-200": ["16px", { lineHeight: "20px" }],         // Body/Primary/L, Body/Secondary/L
        "font-300": ["18px", { lineHeight: "24px" }],         // Body-ish fallback (not in design.md styles)
        "font-400": ["20px", { lineHeight: "24px" }],         // Heading/Primary/S, Heading/Secondary/S
        "font-500": ["24px", { lineHeight: "28px" }],         // Heading/Primary/M, Heading/Secondary/M
        "font-600": ["28px", { lineHeight: "36px" }],         // Not directly defined, custom size
        "font-700": ["32px", { lineHeight: "40px" }],         // Heading/Primary/L, Heading/Secondary/L
        "font-800": ["48px", { lineHeight: "52px" }],         // Heading/Primary/XL, Heading/Secondary/XL
        "font-900": ["60px", { lineHeight: "60px" }],         // Heading/Primary/XXL, Heading/Secondary/XXL
      },
      lineHeight: {
        "line-100": "16px",
        "line-200": "20px",
        "line-300": "22px",
        "line-400": "24px",
        "line-500": "28px",
        "line-600": "36px",
        "line-700": "52px",
        "line-800": "60px",
      },
    },
  },
};

export default config;

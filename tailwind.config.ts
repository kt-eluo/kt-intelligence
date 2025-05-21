import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        "main-170": "10.625rem",
        "main-168": "10.5rem",
        "main-134": "8.375rem",
        "main-100": "6.25rem",
        "main-98": "6.125rem",
        "main-90": "5.625rem",
        "main-88": "5.5rem",
        "main-82": "5.125rem",
        "main-80": "5rem",
        "main-72": "4.5rem",
        "main-64": "4rem",
        "main-56": "3.5rem",
        "main-50": "3.125rem",
        "main-48": "3rem",
        "main-40": "2.5rem",
        "main-36": "2.25rem",
        "main-32": "2rem",
        "main-30": "1.875rem",
        "main-28": "1.75rem",
        "main-26": "1.625rem",
        "main-24": "1.5rem",
        "main-20": "1.25rem",
        "main-18": "1.125rem",
        "main-16": "1rem",
        "main-14": "0.875rem",
        "main-13": "0.8125rem",
        "main-12": "0.75rem",
      },
      lineHeight: {
        "line-088": "0.88",
        "line-10": "1",
        "line-12": "1.2",
        "line-13": "1.3",
        "line-135": "1.35",
        "line-142": "1.42",
        "line-15": "1.5",
        "line-152": "1.52",
        "line-16": "1.6",
        "line-164": "1.64",
        "line-172": "1.72",
        "line-18": "1.8",
      },
      letterSpacing: {
        default: "-0.01em",
        double: "-0.02em",
        triple: "-0.03em",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
      boxShadow: {
        "shadow-card": "2px 6px 12px 0px rgba(0, 0, 0, 0.05)",
        dropdown: "0px 8px 6px 0px rgba(0, 0, 0, 0.08)",
        language: "0px 4px 6px 0px rgba(0, 0, 0, 0.08)",
      },
      background: {
        "main-bg": "linear-gradient(204deg, #FAFAFA 47.92%, #FFF 82.66%)",
      },
      // 기타 설정
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1920px",
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  plugins: [],
};

export default config;

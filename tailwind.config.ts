import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'serif'],
      },
      colors: {
        porcelain: {
            DEFAULT: "#F5F5F0",
            foreground: "#121928",
        },
        "ink-black": {
            DEFAULT: "#121928",
            foreground: "#F5F5F0",
        },
        "golden-bronze": {
            DEFAULT: "#C5A059",
            foreground: "#121928",
        },
        "pine-teal": {
            DEFAULT: "#004D40",
            foreground: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
            from: { opacity: "0" },
            to: { opacity: "1" },
        },
        "fade-in-up": {
            from: { opacity: "0", transform: "translateY(20px)" },
            to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "marquee": "marquee 20s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      rotate: {
        '30': '30deg',
        '60': '60deg',
        '90': '90deg',
        '120': '120deg',
        'y-5': 'rotateY(5deg)',
        'y-180': 'rotateY(180deg)',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        subtitle: {
          DEFAULT: "hsl(var(--subtitle))",
        },
        primary: {
          DEFAULT: '#FA3232',
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: '#22C55E',
        },
        error: {
          DEFAULT: '#FA3232',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      const newUtilities = {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
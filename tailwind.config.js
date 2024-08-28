/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'primary-foreground': '#f1f5f9',
        'secondary': '#64748b',
        'accent': '#f1f5f9',
        'accent-foreground': '#0f172a',
        'destructive': '#dc2626',
        'destructive-foreground': '#fef2f2',
        'ring': '#94a3b8',
        'ring-offset': '#f1f5f9',
        'ring-offset-background': '#f1f5f9',
        'ring-offset-foreground': '#0f172a',
      }
    },
  },
  plugins: [],
}


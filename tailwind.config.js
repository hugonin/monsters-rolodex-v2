module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: 'var(--color-base-100)',
        primary: 'var(--color-primary)'
      },
      buttonColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'

      },
      textColor: {
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

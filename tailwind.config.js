module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "night-sky": "var(--color-night-sky)",
        "sand-light": "var(--color-sand-light)",
        "sand-main":  "var(--color-sand-main)",
        "sand-dark":  "var(--color-sand-dark)",
        "sunset":     "var(--color-sunset)",
      },
    },
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundGreen: '#e0e8dd', // Background color similar to the resume
        textGreen: '#3c6b4c', // Main text color
        borderGreen: '#3c6b4c', // Border color for dividers
      },
      fontFamily: {
        courier: ['Courier', 'monospace'],
        serif: ['Courier', 'monospace'],
        sans: ['Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};


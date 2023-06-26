/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-red": "var(--light-red)",
      "orangey-yellow": "var(--orangey-yellow)",
      "light-orangey-yellow": "var(--light-orangey-yellow)",
      "green-teal": "var(--green-teal)",
      "cobalt-blue": "var(--cobalt-blue)",
      "light-slate-blue": "var(--light-slate-blue)",
      "light-royal-blue": "var(--light-royal-blue)",
      "violet-blue": "var(--violet-blue)",
      "persian-blue": "var(--persian-blue)",
      'white': "var(--white)",
      "pale-blue": "var(--pale-blue)",
      "light-lavender": "var(--light-lavender)",
      "dark-gray-blue": "var(--dark-gray-blue)",
    },
    extend: {},
  },
  plugins: [],
};

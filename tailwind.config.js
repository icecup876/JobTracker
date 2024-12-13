module.exports = {
  // Specify the paths to your template files
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the `src` folder
    "./public/index.html",        // Include the `public/index.html` file
  ],
  theme: {
    extend: {}, // Extend default theme here if needed
  },
  safelist: [
    // Include any dynamically generated classes here
    "text-red-500", 
    "text-blue-500", 
    "bg-green-200",
    "hover:bg-yellow-300",
  ],
  plugins: [],
};

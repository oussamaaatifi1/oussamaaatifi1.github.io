// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Update toggle button icon
  const icon = themeToggle.querySelector("svg");
  if (theme === "light") {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`;
  } else {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>`;
  }
}

// Initialize theme
const savedTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");
setTheme(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addListener((e) => {
  const systemTheme = e.matches ? "dark" : "light";
  if (!localStorage.getItem("theme")) {
    setTheme(systemTheme);
  }
});

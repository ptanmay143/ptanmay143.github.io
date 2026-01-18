// Theme management
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector(".theme-icon");

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

// Toggle theme
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

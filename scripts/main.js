// Main initialization and utilities

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Highlight active navigation link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.borderColor = "var(--border)";
    link.style.color = "var(--text-primary)";
    link.style.background = "var(--bg-card)";

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.style.borderColor = "var(--primary)";
      link.style.color = "var(--primary)";
      link.style.background = "var(--bg-secondary)";
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in effect to all sections
function initFadeInAnimations() {
  const elements = document.querySelectorAll(
    ".timeline-item, .skill-category, .project-card, .education-item, .contact-item"
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 10px var(--shadow)";
  } else {
    header.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeContent();
  initAnimations();

  // Small delay to ensure content is rendered before applying animations
  setTimeout(() => {
    initFadeInAnimations();
    updateActiveNavLink();
  }, 100);
});

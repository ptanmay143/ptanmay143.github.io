// Mobile menu controller
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("navLinks");

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    toggleBtn.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu on click outside
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      nav.classList.remove("active");
    }
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      nav.classList.remove("active");
      toggleBtn.focus();
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // Close mobile menu if open
      const toggleBtn = document.getElementById("mobileMenuToggle");
      const nav = document.getElementById("navLinks");
      if (toggleBtn && nav && nav.classList.contains("active")) {
        toggleBtn.classList.remove("active");
        toggleBtn.setAttribute("aria-expanded", "false");
        nav.classList.remove("active");
      }

      const headerOffset = 75;
      const elementPosition = target.offsetTop;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);

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
    if (window.pageYOffset >= sectionTop - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
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
    ".about-hero-card, .timeline-item, .skill-category, .project-card, .education-item, .cert-item, .pub-item, .community-item, .extracurr-item, .contact-item"
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
  initMobileMenu();

  // Small delay to ensure content is rendered before applying animations
  setTimeout(() => {
    initFadeInAnimations();
    updateActiveNavLink();
  }, 100);
});

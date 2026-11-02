
// =========================================
// HILLARY IRA ABROGINA - PORTFOLIO SCRIPT
// =========================================

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const allNavLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// Close mobile menu after clicking a link
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});

// Update footer year automatically
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// Highlight the navigation link for the visible section
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");

          allNavLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${currentId}`
            );
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

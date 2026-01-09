// Header component with navigation and language switcher
function createHeader(basePath = "") {
  const header = document.createElement("header");

  header.innerHTML = `
    <nav>
      <ul>
        <li><a href="${basePath}index.html" data-i18n="nav.home">Home</a></li>
        <li><a href="${basePath}about.html" data-i18n="nav.about">About Us</a></li>
        <li class="dropdown">
          <a href="${basePath}services/index.html" class="dropdown-toggle" data-i18n="nav.services">Services / Solutions</a>
          <div class="dropdown-content">
            <a href="${basePath}services/power-generation.html" data-i18n="services.powerGeneration">Power Generation</a>
            <a href="${basePath}services/solar-energy.html" data-i18n="services.solarEnergy">Solar Energy</a>
            <a href="${basePath}services/energy-storage.html" data-i18n="services.energyStorage">Energy Storage</a>
            <a href="${basePath}services/hybrid-backup.html" data-i18n="services.hybridBackup">Hybrid & Backup Solutions</a>
            <a href="${basePath}services/project-coordination.html" data-i18n="services.projectCoordination">Project Coordination & Sourcing</a>
            <a href="${basePath}services/supplier-matching.html" data-i18n="services.supplierMatching">Supplier & Client Matching</a>
            <a href="${basePath}services/consulting.html" data-i18n="services.consulting">Consulting & Feasibility</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="${basePath}markets/index.html" class="dropdown-toggle" data-i18n="nav.markets">Markets / Regions</a>
          <div class="dropdown-content">
            <a href="${basePath}markets/europe.html" data-i18n="markets.europe">Europe</a>
            <a href="${basePath}markets/ukraine.html" data-i18n="markets.ukraine">Ukraine</a>
            <a href="${basePath}markets/africa.html" data-i18n="markets.africa">Africa</a>
          </div>
        </li>
        <li><a href="${basePath}how-we-work.html" data-i18n="nav.howWeWork">How We Work</a></li>
        <li><a href="${basePath}partners.html" data-i18n="nav.partners">Partners</a></li>
        <li><a href="${basePath}projects.html" data-i18n="nav.projects">Projects / Use Cases</a></li>
        <li><a href="${basePath}faq.html" data-i18n="nav.faq">FAQ</a></li>
        <li><a href="${basePath}contact.html" data-i18n="nav.contact">Contact</a></li>
        
        <!-- Language Switcher -->
        <li class="dropdown language-switcher">
          <a href="#" class="dropdown-toggle">
            <span class="current-lang">EN</span> 🌐
          </a>
          <div class="dropdown-content lang-dropdown">
            <a href="#" class="lang-option" data-lang="en">🇬🇧 English</a>
            <a href="#" class="lang-option" data-lang="de">🇩🇪 Deutsch</a>
            <a href="#" class="lang-option" data-lang="fr">🇫🇷 Français</a>
          </div>
        </li>
      </ul>
    </nav>
  `;

  return header;
}

// Initialize header on page load
document.addEventListener("DOMContentLoaded", function () {
  // Determine base path based on current location
  const path = window.location.pathname;
  let basePath = "";

  if (
    path.includes("/services/") ||
    path.includes("/markets/") ||
    path.includes("/legal/")
  ) {
    basePath = "../";
  }

  // Insert header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    const header = createHeader(basePath);
    headerPlaceholder.replaceWith(header);
  }

  // Initialize dropdown handlers
  initDropdowns();
});

// Dropdown menu handler - hover for desktop, tap for mobile
function initDropdowns() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  // Mobile: tap to toggle, tap link to navigate
  if (isTouchDevice) {
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        const dropdown = this.closest(".dropdown");
        const isOpen = dropdown.classList.contains("active");

        // Close other dropdowns
        document.querySelectorAll(".dropdown").forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove("active");
          }
        });

        // Toggle current dropdown
        if (!isOpen) {
          e.preventDefault();
          dropdown.classList.add("active");
        }
        // If already open, allow navigation
      });
    });

    // Close dropdown when clicking on a link
    document.querySelectorAll(".dropdown-content a").forEach((link) => {
      link.addEventListener("click", function () {
        this.closest(".dropdown").classList.remove("active");
      });
    });
  }

  // Desktop: dropdown toggle click navigates, items close menu
  if (!isTouchDevice) {
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", function () {
        // On desktop, clicking toggle navigates (hover handles dropdown)
        // No preventDefault - allow navigation
      });
    });

    // Close dropdown when clicking on a link
    document.querySelectorAll(".dropdown-content a").forEach((link) => {
      link.addEventListener("click", function () {
        this.closest(".dropdown").classList.remove("active");
      });
    });
  }

  // Close dropdown when clicking outside (both desktop and mobile)
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach((d) => {
        d.classList.remove("active");
      });
    }
  });
}

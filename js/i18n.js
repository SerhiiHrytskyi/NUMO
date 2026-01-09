// Multi-language support for NUMO website
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "en";
    this.translations = {};
    this.init();
  }

  async init() {
    await this.loadTranslations(this.currentLang);
    this.applyTranslations();
    this.updateLanguageSwitcher();
  }

  async loadTranslations(lang) {
    try {
      // Determine the correct path to translations based on current location
      const basePath =
        window.location.pathname.includes("/services/") ||
        window.location.pathname.includes("/markets/") ||
        window.location.pathname.includes("/legal/")
          ? "../js/translations/"
          : "/js/translations/";

      const response = await fetch(`${basePath}${lang}.json`);
      this.translations = await response.json();
      this.currentLang = lang;
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to English
      if (lang !== "en") {
        await this.loadTranslations("en");
      }
    }
  }

  async switchLanguage(lang) {
    if (lang === this.currentLang) return;

    await this.loadTranslations(lang);
    this.applyTranslations();
    this.updateLanguageSwitcher();
    localStorage.setItem("language", lang);
    localStorage.setItem("selectedLanguage", lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Dispatch custom event for SEO module
    window.dispatchEvent(
      new CustomEvent("languageChanged", { detail: { lang } })
    );
  }

  applyTranslations() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.getTranslation(key);

      if (translation) {
        // Handle different element types
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          if (element.hasAttribute("placeholder")) {
            element.placeholder = translation;
          } else {
            element.value = translation;
          }
        } else if (element.tagName === "OPTION") {
          element.textContent = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });

    // Translate elements with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      }
    });
  }

  getTranslation(key) {
    const keys = key.split(".");
    let value = this.translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return null;
      }
    }

    return value;
  }

  updateLanguageSwitcher() {
    // Update active state on language switcher
    document.querySelectorAll(".lang-option").forEach((option) => {
      const lang = option.getAttribute("data-lang");
      if (lang === this.currentLang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });

    // Update current language display
    const currentLangDisplay = document.querySelector(".current-lang");
    if (currentLangDisplay) {
      currentLangDisplay.textContent = this.currentLang.toUpperCase();
    }
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Initialize i18n when DOM is ready
let i18n;
document.addEventListener("DOMContentLoaded", () => {
  i18n = new I18n();

  // Setup language switcher click handlers
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = option.getAttribute("data-lang");
      i18n.switchLanguage(lang);
    });
  });
});

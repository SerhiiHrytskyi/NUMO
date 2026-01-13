// Landing page multilingual initialization
document.addEventListener('DOMContentLoaded', () => {
  // Add data-i18n attributes programmatically to avoid manual HTML editing
  const translations = {
    // Hero section
    '.hero-landing__title': 'home.heroTitle',
    '.hero-landing__subtitle': 'home.heroText',
    '.hero-landing__actions .btn--primary': 'home.btnDiscuss',
    '.hero-landing__actions .btn--white': 'home.btnServices',
    
    // Section titles - will be added via CSS selectors
    '#about h2:first-of-type': 'home.whatWeDoTitle',
    '#services h2:first-of-type': 'home.coreSolutionsTitle',
    '#how-we-work h2:first-of-type': 'home.howWeWorkTitle',
    '#markets h2:first-of-type': 'home.marketsWeWorkTitle',
    '#why-work-with-us h2:first-of-type': 'home.whyWorkTitle',
    '#projects h2:first-of-type': 'home.useCasesTitle',
    '#contact h2:first-of-type': 'contact.title',
  };

  // Apply data-i18n attributes
  Object.keys(translations).forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute('data-i18n', translations[selector]);
    }
  });

  // Initialize i18n after attributes are set
  if (window.i18n) {
    window.i18n.applyTranslations();
  }
});

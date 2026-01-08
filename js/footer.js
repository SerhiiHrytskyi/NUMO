// Footer component
function createFooter(basePath = '') {
  const footer = document.createElement('footer');
  
  footer.innerHTML = `
    <p data-i18n="footer.rights">&copy; 2026 NUMO. All rights reserved.</p>
    <p>
      <a href="${basePath}legal/imprint.html" style="color: white; margin: 0 1rem" data-i18n="footer.imprint">Imprint</a>
      <a href="${basePath}legal/privacy.html" style="color: white; margin: 0 1rem" data-i18n="footer.privacy">Privacy Policy</a>
      <a href="${basePath}legal/terms.html" style="color: white; margin: 0 1rem" data-i18n="footer.terms">Terms of Use</a>
    </p>
  `;
  
  return footer;
}

// Initialize footer on page load
document.addEventListener('DOMContentLoaded', function() {
  // Determine base path based on current location
  const path = window.location.pathname;
  let basePath = '';
  
  if (path.includes('/services/') || path.includes('/markets/') || path.includes('/legal/')) {
    basePath = '../';
  }
  
  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    const footer = createFooter(basePath);
    footerPlaceholder.replaceWith(footer);
  }
});

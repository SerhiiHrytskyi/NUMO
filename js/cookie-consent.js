/**
 * GDPR/TTDSG Cookie Consent Banner
 * Compliant with German and EU regulations
 */

class CookieConsent {
  constructor() {
    this.cookieName = 'numo_cookie_consent';
    this.cookieExpiry = 365; // days
    this.init();
  }

  init() {
    // Check if consent already given
    if (!this.hasConsent()) {
      this.showBanner();
    } else {
      this.loadAnalytics();
    }
  }

  hasConsent() {
    return this.getCookie(this.cookieName) === 'accepted';
  }

  showBanner() {
    const currentLang = localStorage.getItem('language') || 'en';
    
    const messages = {
      en: {
        title: 'Cookie Notice',
        text: 'We use technically necessary cookies to ensure the functionality of this website. With your consent, we also use analytics cookies to improve our service. You can change or revoke your consent at any time.',
        acceptAll: 'Accept All',
        acceptNecessary: 'Necessary Only',
        settings: 'Cookie Settings',
        moreInfo: 'Privacy Policy'
      },
      de: {
        title: 'Cookie-Hinweis',
        text: 'Wir verwenden technisch notwendige Cookies, um die Funktionalität dieser Website zu gewährleisten. Mit Ihrer Einwilligung nutzen wir auch Analyse-Cookies zur Verbesserung unseres Angebots. Sie können Ihre Einwilligung jederzeit ändern oder widerrufen.',
        acceptAll: 'Alle akzeptieren',
        acceptNecessary: 'Nur notwendige',
        settings: 'Cookie-Einstellungen',
        moreInfo: 'Datenschutzerklärung'
      },
      fr: {
        title: 'Avis sur les cookies',
        text: 'Nous utilisons des cookies techniquement nécessaires pour assurer le fonctionnement de ce site. Avec votre consentement, nous utilisons également des cookies d\'analyse pour améliorer notre service. Vous pouvez modifier ou révoquer votre consentement à tout moment.',
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Nécessaires uniquement',
        settings: 'Paramètres des cookies',
        moreInfo: 'Politique de confidentialité'
      }
    };

    const msg = messages[currentLang] || messages.en;
    
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <h3>${msg.title}</h3>
          <p>${msg.text}</p>
        </div>
        <div class="cookie-banner-actions">
          <button id="cookie-accept-all" class="cookie-btn cookie-btn-primary">${msg.acceptAll}</button>
          <button id="cookie-accept-necessary" class="cookie-btn cookie-btn-secondary">${msg.acceptNecessary}</button>
          <a href="legal/privacy.html" class="cookie-link">${msg.moreInfo}</a>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Add styles
    this.addStyles();

    // Add event listeners
    document.getElementById('cookie-accept-all').addEventListener('click', () => {
      this.acceptAll();
    });

    document.getElementById('cookie-accept-necessary').addEventListener('click', () => {
      this.acceptNecessary();
    });
  }

  acceptAll() {
    this.setCookie(this.cookieName, 'accepted', this.cookieExpiry);
    this.setCookie('numo_analytics_consent', 'accepted', this.cookieExpiry);
    this.hideBanner();
    this.loadAnalytics();
  }

  acceptNecessary() {
    this.setCookie(this.cookieName, 'necessary_only', this.cookieExpiry);
    this.setCookie('numo_analytics_consent', 'rejected', this.cookieExpiry);
    this.hideBanner();
  }

  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 300);
    }
  }

  loadAnalytics() {
    const analyticsConsent = this.getCookie('numo_analytics_consent');
    if (analyticsConsent === 'accepted') {
      // Load Google Analytics or other analytics here
      console.log('Analytics loaded (consent given)');
      // Example: Load GA4
      // const script = document.createElement('script');
      // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      // script.async = true;
      // document.head.appendChild(script);
    }
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Lax';
  }

  getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  addStyles() {
    if (document.getElementById('cookie-consent-styles')) return;

    const style = document.createElement('style');
    style.id = 'cookie-consent-styles';
    style.textContent = `
      .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        color: white;
        padding: 20px;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideUp 0.3s ease-out;
        transition: opacity 0.3s;
      }

      @keyframes slideUp {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }

      .cookie-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
      }

      .cookie-banner-text {
        flex: 1;
        min-width: 300px;
      }

      .cookie-banner-text h3 {
        margin: 0 0 10px 0;
        font-size: 1.3em;
        font-weight: 600;
      }

      .cookie-banner-text p {
        margin: 0;
        font-size: 0.95em;
        line-height: 1.5;
        opacity: 0.95;
      }

      .cookie-banner-actions {
        display: flex;
        gap: 15px;
        align-items: center;
        flex-wrap: wrap;
      }

      .cookie-btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        white-space: nowrap;
      }

      .cookie-btn-primary {
        background: #4CAF50;
        color: white;
      }

      .cookie-btn-primary:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
      }

      .cookie-btn-secondary {
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid white;
      }

      .cookie-btn-secondary:hover {
        background: rgba(255,255,255,0.3);
        transform: translateY(-2px);
      }

      .cookie-link {
        color: white;
        text-decoration: underline;
        font-size: 0.9em;
        opacity: 0.9;
        transition: opacity 0.3s;
      }

      .cookie-link:hover {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .cookie-banner-content {
          flex-direction: column;
          align-items: stretch;
        }

        .cookie-banner-actions {
          flex-direction: column;
          width: 100%;
        }

        .cookie-btn {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // Method to revoke consent (can be called from settings page)
  revokeConsent() {
    this.setCookie(this.cookieName, '', -1);
    this.setCookie('numo_analytics_consent', '', -1);
    window.location.reload();
  }
}

// Initialize cookie consent when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.cookieConsent = new CookieConsent();
  });
} else {
  window.cookieConsent = new CookieConsent();
}

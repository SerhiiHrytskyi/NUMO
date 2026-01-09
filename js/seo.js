/**
 * SEO Module - Dynamic Meta Tags and Structured Data
 * Manages SEO optimization for multilingual website
 */

const SEO = {
  // Default site data
  siteData: {
    name: 'NUMO',
    fullName: 'NUMO Energy Solutions Coordinator',
    url: 'https://numo-energy.com',
    logo: 'https://numo-energy.com/images/logo.png',
    defaultImage: 'https://numo-energy.com/images/og-default.jpg'
  },

  // SEO metadata for each page (language-specific)
  metadata: {
    en: {
      index: {
        title: 'NUMO - Energy Solutions Coordinator | Power, Solar & Hybrid Systems',
        description: 'NUMO coordinates reliable energy solutions across Europe, Ukraine & Africa. Power generation, solar energy, storage & hybrid systems. Independent project coordination.',
        keywords: 'energy solutions, power generation, solar energy, hybrid systems, energy storage, project coordination, BESS, diesel generators, PV systems',
        ogTitle: 'NUMO - Energy Solutions Coordinator',
        ogDescription: 'We connect clients, suppliers and technologies for reliable power, solar and hybrid energy solutions.'
      },
      about: {
        title: 'About NUMO - Independent Energy Solutions Coordinator',
        description: 'Learn about NUMO - your independent coordinator for energy projects. We structure solutions, source suppliers and align parties across Europe, Ukraine & Africa.',
        keywords: 'about NUMO, energy coordinator, project connector, supplier sourcing, energy solutions',
        ogTitle: 'About NUMO Energy Solutions',
        ogDescription: 'Independent coordinator connecting clients, suppliers and technologies for energy projects.'
      },
      faq: {
        title: 'FAQ - Frequently Asked Questions | NUMO Energy',
        description: 'Common questions about NUMO services, project coordination, pricing, supplier selection and energy solutions. Get answers about how we work.',
        keywords: 'FAQ, questions, energy solutions, project coordination, pricing, suppliers',
        ogTitle: 'NUMO FAQ - Your Questions Answered',
        ogDescription: 'Find answers to common questions about NUMO energy solutions and project coordination.'
      },
      contact: {
        title: 'Contact NUMO - Get Energy Solutions Support',
        description: 'Contact NUMO for energy project coordination. Discuss power generation, solar, storage or hybrid solutions. Available for Europe, Ukraine & Africa.',
        keywords: 'contact NUMO, energy solutions contact, project inquiry, energy consultation',
        ogTitle: 'Contact NUMO Energy Solutions',
        ogDescription: 'Get in touch to discuss your energy project. We coordinate solutions across multiple regions.'
      },
      'how-we-work': {
        title: 'How We Work - NUMO Project Coordination Process',
        description: 'Discover NUMO\'s 5-step coordination process: requirements analysis, solution design, supplier selection, commercial alignment & delivery support.',
        keywords: 'how we work, project process, coordination steps, supplier selection, solution design',
        ogTitle: 'NUMO Work Process - 5 Steps to Success',
        ogDescription: 'Our proven coordination process from requirements to delivery support.'
      },
      partners: {
        title: 'Partners - Manufacturer & Supplier Network | NUMO',
        description: 'NUMO partner network: manufacturers, distributors, EPC contractors and logistics partners for energy solutions worldwide.',
        keywords: 'energy partners, manufacturers, suppliers, distributors, EPC contractors',
        ogTitle: 'NUMO Partner Network',
        ogDescription: 'Global network of manufacturers and suppliers for energy solutions.'
      },
      projects: {
        title: 'Projects & Use Cases - NUMO Energy Solutions',
        description: 'Real-world energy projects coordinated by NUMO: industrial backup, off-grid solar, hybrid systems and commercial installations.',
        keywords: 'energy projects, case studies, hybrid systems, solar projects, backup power',
        ogTitle: 'NUMO Project Portfolio',
        ogDescription: 'Explore our completed energy projects across different sectors and regions.'
      }
    },
    de: {
      index: {
        title: 'NUMO - Energielösungen Koordinator | Strom, Solar & Hybridsysteme',
        description: 'NUMO koordiniert zuverlässige Energielösungen in Europa, Ukraine & Afrika. Stromerzeugung, Solarenergie, Speicher & Hybridsysteme. Unabhängige Projektkoordination.',
        keywords: 'Energielösungen, Stromerzeugung, Solarenergie, Hybridsysteme, Energiespeicher, Projektkoordination, BESS, Dieselgeneratoren, PV-Systeme',
        ogTitle: 'NUMO - Energielösungen Koordinator',
        ogDescription: 'Wir verbinden Kunden, Lieferanten und Technologien für zuverlässige Energie-, Solar- und Hybridlösungen.'
      },
      about: {
        title: 'Über NUMO - Unabhängiger Energielösungen Koordinator',
        description: 'Erfahren Sie mehr über NUMO - Ihr unabhängiger Koordinator für Energieprojekte. Wir strukturieren Lösungen und koordinieren Parteien in Europa, Ukraine & Afrika.',
        keywords: 'über NUMO, Energiekoordinator, Projektverbinder, Lieferantenbeschaffung, Energielösungen',
        ogTitle: 'Über NUMO Energielösungen',
        ogDescription: 'Unabhängiger Koordinator für Energieprojekte weltweit.'
      },
      faq: {
        title: 'FAQ - Häufig gestellte Fragen | NUMO Energie',
        description: 'Häufige Fragen zu NUMO-Services, Projektkoordination, Preisgestaltung, Lieferantenauswahl und Energielösungen.',
        keywords: 'FAQ, Fragen, Energielösungen, Projektkoordination, Preise, Lieferanten',
        ogTitle: 'NUMO FAQ - Ihre Fragen beantwortet',
        ogDescription: 'Finden Sie Antworten auf häufige Fragen zu NUMO Energielösungen.'
      },
      contact: {
        title: 'Kontakt NUMO - Energielösungen Support',
        description: 'Kontaktieren Sie NUMO für Energieprojektkoordination. Besprechen Sie Stromerzeugung, Solar, Speicher oder Hybridlösungen.',
        keywords: 'Kontakt NUMO, Energielösungen Kontakt, Projektanfrage, Energieberatung',
        ogTitle: 'Kontakt NUMO Energielösungen',
        ogDescription: 'Kontaktieren Sie uns für Ihr Energieprojekt.'
      },
      'how-we-work': {
        title: 'Wie wir arbeiten - NUMO Projektkoordination Prozess',
        description: 'Entdecken Sie NUMOs 5-Schritt-Koordinationsprozess: Anforderungsanalyse, Lösungsdesign, Lieferantenauswahl, kommerzielle Abstimmung & Lieferunterstützung.',
        keywords: 'wie wir arbeiten, Projektprozess, Koordinationsschritte, Lieferantenauswahl, Lösungsdesign',
        ogTitle: 'NUMO Arbeitsprozess - 5 Schritte zum Erfolg',
        ogDescription: 'Unser bewährter Koordinationsprozess von Anforderungen bis Lieferunterstützung.'
      },
      partners: {
        title: 'Partner - Hersteller & Lieferantennetzwerk | NUMO',
        description: 'NUMO Partnernetzwerk: Hersteller, Distributoren, EPC-Auftragnehmer und Logistikpartner für Energielösungen weltweit.',
        keywords: 'Energiepartner, Hersteller, Lieferanten, Distributoren, EPC-Auftragnehmer',
        ogTitle: 'NUMO Partnernetzwerk',
        ogDescription: 'Globales Netzwerk von Herstellern und Lieferanten für Energielösungen.'
      },
      projects: {
        title: 'Projekte & Anwendungsfälle - NUMO Energielösungen',
        description: 'Reale Energieprojekte koordiniert von NUMO: industrielle Notstromversorgung, netzunabhängige Solar, Hybridsysteme und kommerzielle Installationen.',
        keywords: 'Energieprojekte, Fallstudien, Hybridsysteme, Solarprojekte, Notstromversorgung',
        ogTitle: 'NUMO Projektportfolio',
        ogDescription: 'Entdecken Sie unsere abgeschlossenen Energieprojekte in verschiedenen Sektoren.'
      }
    },
    fr: {
      index: {
        title: 'NUMO - Coordinateur Solutions Énergétiques | Électricité, Solaire & Hybride',
        description: 'NUMO coordonne des solutions énergétiques fiables en Europe, Ukraine & Afrique. Production électrique, énergie solaire, stockage & systèmes hybrides.',
        keywords: 'solutions énergétiques, production électrique, énergie solaire, systèmes hybrides, stockage énergie, coordination projet, BESS, générateurs diesel, systèmes PV',
        ogTitle: 'NUMO - Coordinateur Solutions Énergétiques',
        ogDescription: 'Nous connectons clients, fournisseurs et technologies pour des solutions énergétiques fiables.'
      },
      about: {
        title: 'À propos NUMO - Coordinateur Indépendant Solutions Énergétiques',
        description: 'Découvrez NUMO - votre coordinateur indépendant pour projets énergétiques. Nous structurons solutions et coordonnons parties en Europe, Ukraine & Afrique.',
        keywords: 'à propos NUMO, coordinateur énergie, connecteur projet, sourcing fournisseurs, solutions énergétiques',
        ogTitle: 'À propos NUMO Solutions Énergétiques',
        ogDescription: 'Coordinateur indépendant pour projets énergétiques mondiaux.'
      },
      faq: {
        title: 'FAQ - Questions Fréquentes | NUMO Énergie',
        description: 'Questions courantes sur services NUMO, coordination projet, tarification, sélection fournisseurs et solutions énergétiques.',
        keywords: 'FAQ, questions, solutions énergétiques, coordination projet, tarifs, fournisseurs',
        ogTitle: 'NUMO FAQ - Vos Questions Répondues',
        ogDescription: 'Trouvez réponses aux questions courantes sur solutions énergétiques NUMO.'
      },
      contact: {
        title: 'Contact NUMO - Support Solutions Énergétiques',
        description: 'Contactez NUMO pour coordination projet énergétique. Discutez production électrique, solaire, stockage ou solutions hybrides.',
        keywords: 'contact NUMO, contact solutions énergétiques, demande projet, consultation énergie',
        ogTitle: 'Contact NUMO Solutions Énergétiques',
        ogDescription: 'Contactez-nous pour discuter de votre projet énergétique.'
      },
      'how-we-work': {
        title: 'Comment nous travaillons - Processus Coordination NUMO',
        description: 'Découvrez processus coordination NUMO en 5 étapes: analyse besoins, conception solution, sélection fournisseurs, alignement commercial & support livraison.',
        keywords: 'comment nous travaillons, processus projet, étapes coordination, sélection fournisseurs, conception solution',
        ogTitle: 'Processus Travail NUMO - 5 Étapes Succès',
        ogDescription: 'Notre processus coordination éprouvé des besoins au support livraison.'
      },
      partners: {
        title: 'Partenaires - Réseau Fabricants & Fournisseurs | NUMO',
        description: 'Réseau partenaires NUMO: fabricants, distributeurs, entrepreneurs EPC et partenaires logistiques pour solutions énergétiques mondiales.',
        keywords: 'partenaires énergie, fabricants, fournisseurs, distributeurs, entrepreneurs EPC',
        ogTitle: 'Réseau Partenaires NUMO',
        ogDescription: 'Réseau mondial de fabricants et fournisseurs pour solutions énergétiques.'
      },
      projects: {
        title: 'Projets & Cas d\'Usage - NUMO Solutions Énergétiques',
        description: 'Projets énergétiques réels coordonnés par NUMO: secours industriel, solaire hors-réseau, systèmes hybrides et installations commerciales.',
        keywords: 'projets énergie, études cas, systèmes hybrides, projets solaires, alimentation secours',
        ogTitle: 'Portfolio Projets NUMO',
        ogDescription: 'Explorez nos projets énergétiques complétés dans différents secteurs.'
      }
    }
  },

  /**
   * Initialize SEO for current page
   */
  init() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const pageName = this.getPageName();
    
    this.updateMetaTags(pageName, currentLang);
    this.addStructuredData(pageName, currentLang);
    this.updateHreflangTags(pageName);
    this.updateCanonical(pageName);
  },

  /**
   * Get current page name from URL
   */
  getPageName() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop().replace('.html', '') || 'index';
    return fileName;
  },

  /**
   * Update meta tags dynamically
   */
  updateMetaTags(pageName, lang) {
    const meta = this.metadata[lang]?.[pageName] || this.metadata.en[pageName] || this.metadata.en.index;
    
    // Update title
    document.title = meta.title;
    
    // Update or create meta description
    this.setOrUpdateMeta('name', 'description', meta.description);
    this.setOrUpdateMeta('name', 'keywords', meta.keywords);
    
    // Open Graph tags
    this.setOrUpdateMeta('property', 'og:title', meta.ogTitle);
    this.setOrUpdateMeta('property', 'og:description', meta.ogDescription);
    this.setOrUpdateMeta('property', 'og:type', 'website');
    this.setOrUpdateMeta('property', 'og:url', `${this.siteData.url}/${pageName}.html`);
    this.setOrUpdateMeta('property', 'og:image', this.siteData.defaultImage);
    this.setOrUpdateMeta('property', 'og:site_name', this.siteData.fullName);
    this.setOrUpdateMeta('property', 'og:locale', this.getLocale(lang));
    
    // Twitter Card tags
    this.setOrUpdateMeta('name', 'twitter:card', 'summary_large_image');
    this.setOrUpdateMeta('name', 'twitter:title', meta.ogTitle);
    this.setOrUpdateMeta('name', 'twitter:description', meta.ogDescription);
    this.setOrUpdateMeta('name', 'twitter:image', this.siteData.defaultImage);
    
    // Robots meta
    this.setOrUpdateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Language
    document.documentElement.lang = lang;
  },

  /**
   * Helper to set or update meta tag
   */
  setOrUpdateMeta(attribute, name, content) {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  },

  /**
   * Add hreflang tags for multilingual SEO
   */
  updateHreflangTags(pageName) {
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    
    const languages = ['en', 'de', 'fr'];
    const baseUrl = this.siteData.url;
    
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}/${pageName}.html`;
      document.head.appendChild(link);
    });
    
    // Add x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}/${pageName}.html`;
    document.head.appendChild(defaultLink);
  },

  /**
   * Update canonical URL
   */
  updateCanonical(pageName) {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = `${this.siteData.url}/${pageName}.html`;
  },

  /**
   * Add JSON-LD structured data
   */
  addStructuredData(pageName, lang) {
    // Remove existing structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": this.siteData.fullName,
      "url": this.siteData.url,
      "logo": this.siteData.logo,
      "description": this.metadata[lang][pageName]?.description || this.metadata.en.index.description,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "German", "French"]
      },
      "areaServed": ["Europe", "Ukraine", "Africa"]
    };
    
    // Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": this.siteData.fullName,
      "url": this.siteData.url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${this.siteData.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
    
    // Breadcrumb schema
    const breadcrumbSchema = this.getBreadcrumbSchema(pageName);
    
    // Add schemas to page
    [organizationSchema, websiteSchema, breadcrumbSchema].forEach(schema => {
      if (schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    });
  },

  /**
   * Generate breadcrumb schema
   */
  getBreadcrumbSchema(pageName) {
    if (pageName === 'index') return null;
    
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${this.siteData.url}/index.html`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": pageName.charAt(0).toUpperCase() + pageName.slice(1).replace('-', ' '),
          "item": `${this.siteData.url}/${pageName}.html`
        }
      ]
    };
    
    return breadcrumb;
  },

  /**
   * Get locale string for language
   */
  getLocale(lang) {
    const locales = {
      en: 'en_US',
      de: 'de_DE',
      fr: 'fr_FR'
    };
    return locales[lang] || 'en_US';
  }
};

// Initialize SEO when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SEO.init());
} else {
  SEO.init();
}

// Re-initialize SEO when language changes
window.addEventListener('languageChanged', () => {
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  const pageName = SEO.getPageName();
  SEO.updateMetaTags(pageName, currentLang);
});

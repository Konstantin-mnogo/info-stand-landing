const StructuredData = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://многостендов.рф/#organization",
    "name": "Многостендов.рф",
    "alternateName": "Производство стендов в Благовещенске",
    "description": "Производство информационных, навигационных стендов и интерьерных решений в Благовещенске. Собственное производство, доставка по России.",
    "url": "https://многостендов.рф/",
    "telephone": "+7-4162-22-78-03",
    "priceRange": "от 500₽",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Благовещенск",
      "addressRegion": "Амурская область",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.290633",
      "longitude": "127.527172"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Благовещенск"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Амурская область"
      },
      {
        "@type": "Country",
        "name": "Россия"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Каталог продукции",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Информационные стенды",
            "description": "Модульные стенды с карманами для документов А4, А3, А2",
            "category": "Информационные стенды"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Навигационные стенды и таблички",
            "description": "Указатели, таблички на двери, схемы этажей",
            "category": "Навигационные системы"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Стенды с подсветкой",
            "description": "Световые панели и витрины с LED-подсветкой",
            "category": "Световые конструкции"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "paymentAccepted": "Наличные, безналичный расчет",
    "currenciesAccepted": "RUB"
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://многостендов.рф/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Продукция",
        "item": "https://многостендов.рф/#products"
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://многостендов.рф/#organization",
    "name": "Многостендов.рф",
    "url": "https://многостендов.рф/",
    "logo": "https://cdn.poehali.dev/files/797b248c-6654-4ea7-8a6f-1b287b8de0cf.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-4162-22-78-03",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    },
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
};

export default StructuredData;

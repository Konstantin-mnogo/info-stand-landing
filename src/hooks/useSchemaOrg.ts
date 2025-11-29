import { useEffect } from 'react';

export const useSchemaOrg = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Многостендов.рф",
      "image": "https://cdn.poehali.dev/intertnal/img/og.png",
      "description": "Производство информационных и навигационных стендов в Благовещенске. Собственное производство, гарантия до 3 лет, доставка по ДВФО.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Благовещенск",
        "addressRegion": "Амурская область",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.290633,
        "longitude": 127.527172
      },
      "url": "https://многостендов.рф",
      "telephone": "+7-4162-22-78-03",
      "priceRange": "от 500₽",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Амурская область, ДВФО"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит заказать стенд в Благовещенске?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Стоимость зависит от размера, материалов и сложности. Простые информационные стенды — от 1 500 ₽, навигационные таблички — от 500 ₽, стенды с подсветкой — от 3 000 ₽. Точную цену рассчитаем после уточнения всех требований."
          }
        },
        {
          "@type": "Question",
          "name": "Какие сроки изготовления стендов?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Стандартные стенды изготавливаем от 2 рабочих дней. Сложные проекты с индивидуальным дизайном — 5-10 дней. Срочные заказы обсуждаются индивидуально."
          }
        },
        {
          "@type": "Question",
          "name": "Вы делаете доставку по Амурской области?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, доставляем по всей Амурской области: Белогорск, Тында, Свободный, Райчихинск и другие города. Также организуем доставку по ДВФО. Монтаж выполняем в Благовещенске и Амурской области."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли изменить информацию на стенде?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы делаем стенды с карманами — информацию легко обновить самостоятельно. Также изготавливаем магнитные доски, на которых можно писать маркером."
          }
        },
        {
          "@type": "Question",
          "name": "Есть ли гарантия на стенды?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "На все изделия даём официальную гарантию до 3 лет. При правильной эксплуатации стенды служат 10+ лет."
          }
        },
        {
          "@type": "Question",
          "name": "Можете сделать стенд по нашему дизайну?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, работаем как по вашим макетам, так и разрабатываем дизайн сами. Учтём корпоративный стиль, логотип и фирменные цвета."
          }
        }
      ]
    };

    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Информационные стенды",
          "description": "Классические стенды с карманами для документов А4, А3, А2. Идеально для школ, офисов, госучреждений.",
          "offers": {
            "@type": "Offer",
            "price": "1500",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "Навигационные таблички",
          "description": "Указатели, таблички на двери, схемы этажей. Соответствуют требованиям доступной среды.",
          "offers": {
            "@type": "Offer",
            "price": "500",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "Стенды с подсветкой",
          "description": "Световые панели и витрины с LED-подсветкой. Для выставок, торговых зон, промо-стоек.",
          "offers": {
            "@type": "Offer",
            "price": "3000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "position": 4,
          "name": "Акриловые конструкции",
          "description": "Прозрачные стенды из оргстекла. Премиальный вид, безопасны для детских учреждений.",
          "offers": {
            "@type": "Offer",
            "price": "2000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "position": 5,
          "name": "Фотозоны",
          "description": "Пресс-воллы, брендированные фотозоны для мероприятий. Быстрая сборка и транспортировка.",
          "offers": {
            "@type": "Offer",
            "price": "8000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "position": 6,
          "name": "Интерьерные вывески",
          "description": "Объёмные буквы и логотипы с подсветкой и без. Для холлов, ресепшн, переговорных.",
          "offers": {
            "@type": "Offer",
            "price": "5000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(productsSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);
};
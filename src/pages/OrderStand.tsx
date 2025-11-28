import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const OrderStand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    {
      icon: 'Factory',
      title: 'Собственное производство',
      description: 'Производственная база в Благовещенске с современным оборудованием'
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки',
      description: 'Изготовление от 3 рабочих дней в зависимости от сложности заказа'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 3 года',
      description: 'Официальная гарантия на все виды стендов и конструкций'
    },
    {
      icon: 'Truck',
      title: 'Доставка и монтаж',
      description: 'Доставим и установим в любую точку Амурской области и России'
    },
    {
      icon: 'Palette',
      title: 'Индивидуальный дизайн',
      description: 'Разработаем макет под ваш фирменный стиль бесплатно'
    },
    {
      icon: 'Wrench',
      title: 'Любая сложность',
      description: 'От простых табличек до сложных навигационных систем'
    }
  ];

  const standTypes = [
    {
      title: 'Информационные стенды',
      description: 'Классические стенды с карманами для документов А4, А3, А2. Идеально для школ, офисов, госучреждений.',
      price: 'от 1 500 ₽',
      popular: true
    },
    {
      title: 'Навигационные таблички',
      description: 'Указатели, таблички на двери, схемы этажей. Соответствуют требованиям доступной среды.',
      price: 'от 500 ₽',
      popular: false
    },
    {
      title: 'Стенды с подсветкой',
      description: 'Световые панели и витрины с LED-подсветкой. Для выставок, торговых зон, промо-стоек.',
      price: 'от 3 000 ₽',
      popular: false
    },
    {
      title: 'Акриловые конструкции',
      description: 'Прозрачные стенды из оргстекла. Премиальный вид, безопасны для детских учреждений.',
      price: 'от 2 000 ₽',
      popular: false
    },
    {
      title: 'Фотозоны',
      description: 'Пресс-воллы, брендированные фотозоны для мероприятий. Быстрая сборка и транспортировка.',
      price: 'от 8 000 ₽',
      popular: false
    },
    {
      title: 'Интерьерные вывески',
      description: 'Объёмные буквы и логотипы с подсветкой и без. Для холлов, ресепшн, переговорных.',
      price: 'от 5 000 ₽',
      popular: false
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Заявка',
      description: 'Вы оставляете заявку на сайте или звоните по телефону +7 (4162) 22-78-03'
    },
    {
      step: '2',
      title: 'Консультация',
      description: 'Менеджер уточняет детали, при необходимости выезжает на замеры'
    },
    {
      step: '3',
      title: 'Расчёт и макет',
      description: 'Готовим коммерческое предложение и 3D-визуализацию стенда'
    },
    {
      step: '4',
      title: 'Производство',
      description: 'Изготавливаем стенд на собственном производстве в Благовещенске'
    },
    {
      step: '5',
      title: 'Доставка и монтаж',
      description: 'Доставляем и устанавливаем стенд в согласованные сроки'
    },
    {
      step: '6',
      title: 'Гарантия',
      description: 'Выдаём паспорт изделия и гарантию 3 года'
    }
  ];

  const faq = [
    {
      question: 'Сколько стоит заказать стенд в Благовещенске?',
      answer: 'Стоимость зависит от размера, материалов и сложности. Простые информационные стенды — от 1 500 ₽, навигационные таблички — от 500 ₽, стенды с подсветкой — от 3 000 ₽. Точную цену рассчитаем после уточнения всех требований.'
    },
    {
      question: 'Какие сроки изготовления стендов?',
      answer: 'Стандартные стенды изготавливаем за 3-5 рабочих дней. Сложные проекты с индивидуальным дизайном — 7-14 дней. Срочные заказы обсуждаются индивидуально.'
    },
    {
      question: 'Вы делаете доставку по Амурской области?',
      answer: 'Да, доставляем по всей Амурской области: Белогорск, Тында, Свободный, Райчихинск и другие города. Также организуем доставку в любой регион России.'
    },
    {
      question: 'Можно ли изменить информацию на стенде?',
      answer: 'Да, мы делаем стенды с карманами — информацию легко обновить самостоятельно. Также изготавливаем магнитные доски, на которых можно писать маркером.'
    },
    {
      question: 'Есть ли гарантия на стенды?',
      answer: 'На все изделия даём официальную гарантию 3 года. При правильной эксплуатации стенды служат 10+ лет.'
    },
    {
      question: 'Можете сделать стенд по нашему дизайну?',
      answer: 'Да, работаем как по вашим макетам, так и разрабатываем дизайн сами. Учтём корпоративный стиль, логотип и фирменные цвета.'
    }
  ];

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#order';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-secondary via-secondary/95 to-primary/10 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Заказать стенд в Благовещенске
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
            Производство информационных, навигационных стендов и табличек на заказ. Собственная производственная база, быстрые сроки, доставка по Амурской области и России. Гарантия 3 года.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={24} className="text-primary" />
              <span>От 1 500 ₽</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={24} className="text-primary" />
              <span>Срок от 3 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={24} className="text-primary" />
              <span>Гарантия 3 года</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl"
            onClick={scrollToOrder}
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Почему заказывают у нас
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Преимущества работы с производством в Благовещенске
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Icon name={advantage.icon} size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stand Types */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Виды стендов на заказ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Изготавливаем стенды любой сложности под ваши задачи
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standTypes.map((type, index) => (
              <Card 
                key={index} 
                className={`shadow-lg hover:shadow-xl transition-all ${type.popular ? 'border-2 border-primary' : ''}`}
              >
                {type.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Популярный выбор
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-secondary">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {type.price}
                  </div>
                  <Button className="w-full" onClick={scrollToOrder}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Как заказать стенд
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простой процесс от заявки до установки
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о заказе стендов в Благовещенске
          </p>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary via-secondary/95 to-primary/10 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Готовы заказать стенд?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Оставьте заявку — рассчитаем стоимость и предложим лучшее решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl"
              onClick={scrollToOrder}
            >
              Оставить заявку
            </Button>
            <a href="tel:+74162227803" className="text-xl font-semibold hover:text-primary transition-colors">
              +7 (4162) 22-78-03
            </a>
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
              Производство стендов в Благовещенске на заказ
            </h2>
            <p className="mb-4 leading-relaxed">
              Если вы ищете, где <strong>заказать стенд в Благовещенске</strong>, компания Многостендов.рф предлагает полный цикл производства информационных, навигационных и рекламных стендов. Мы работаем с организациями, школами, медицинскими учреждениями, офисами и торговыми центрами по всей Амурской области.
            </p>
            <p className="mb-4 leading-relaxed">
              Наше производство находится в Благовещенске, что позволяет предлагать конкурентные цены, короткие сроки изготовления и оперативную доставку. Мы используем современное оборудование: УФ-принтеры, лазерные станки, фрезерные станки с ЧПУ — это гарантирует высокое качество и точность изготовления.
            </p>

            <h3 className="font-heading text-2xl font-bold text-secondary mt-8 mb-4">
              Почему клиенты выбирают нас для заказа стендов
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Собственное производство</strong> — контролируем качество на каждом этапе</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Быстрые сроки</strong> — от 3 рабочих дней</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Гарантия 3 года</strong> — уверены в качестве своей продукции</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Доставка и монтаж</strong> — по всей Амурской области и России</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Бесплатная разработка макета</strong> — учтём ваш фирменный стиль</span>
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-secondary mt-8 mb-4">
              Какие стенды можно заказать
            </h3>
            <p className="mb-4 leading-relaxed">
              Мы изготавливаем стенды любой сложности и назначения. В нашем каталоге представлены информационные стенды для школ и офисов, навигационные системы для торговых центров и госучреждений, стенды с подсветкой для выставок, акриловые конструкции премиум-класса, фотозоны для мероприятий и интерьерные вывески.
            </p>
            <p className="mb-4 leading-relaxed">
              Все стенды изготавливаются индивидуально под ваши требования. Мы работаем с различными материалами: ПВХ, акрил, алюминиевый композит, металл, дерево. Используем УФ-печать, аппликацию плёнкой, гравировку и другие технологии декорирования.
            </p>

            <h3 className="font-heading text-2xl font-bold text-secondary mt-8 mb-4">
              Цены на стенды в Благовещенске
            </h3>
            <p className="mb-4 leading-relaxed">
              Стоимость зависит от размера, материалов, сложности дизайна и дополнительных опций (подсветка, карманы, монтаж). Простые информационные стенды стоят от 1 500 рублей, навигационные таблички — от 500 рублей, стенды с подсветкой — от 3 000 рублей. Точную стоимость рассчитаем после уточнения ваших требований.
            </p>
            <p className="mb-4 leading-relaxed">
              Мы предлагаем выгодные условия для постоянных клиентов и при больших объёмах заказа. Работаем как с наличным, так и с безналичным расчётом. Предоставляем все необходимые документы для бухгалтерии.
            </p>

            <h3 className="font-heading text-2xl font-bold text-secondary mt-8 mb-4">
              Как заказать стенд в Благовещенске
            </h3>
            <p className="mb-4 leading-relaxed">
              Чтобы <strong>заказать стенд</strong>, позвоните нам по телефону <a href="tel:+74162227803" className="text-primary font-semibold">+7 (4162) 22-78-03</a> или оставьте заявку на сайте. Менеджер свяжется с вами, уточнит детали, рассчитает стоимость и при необходимости выедет на замеры. После согласования мы подготовим макет для вашего утверждения и приступим к производству.
            </p>
            <p className="leading-relaxed">
              Готовые стенды доставим и установим в согласованные сроки. Выдадим паспорт изделия и гарантию 3 года. Обслуживаем клиентов по всей Амурской области: Благовещенск, Белогорск, Тында, Свободный, Райчихинск, Шимановск и другие города.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderStand;

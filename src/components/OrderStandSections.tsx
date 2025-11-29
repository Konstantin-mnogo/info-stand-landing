import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export const HeroSection = ({ onOrderClick }: HeroSectionProps) => (
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
          <span>Срок от 2 дней</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle2" size={24} className="text-primary" />
          <span>Гарантия до 3 лет</span>
        </div>
      </div>
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl"
        onClick={onOrderClick}
      >
        Оставить заявку
      </Button>
    </div>
  </section>
);

interface AdvantagesSectionProps {
  advantages: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export const AdvantagesSection = ({ advantages }: AdvantagesSectionProps) => (
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
);

interface StandTypesSectionProps {
  standTypes: Array<{
    title: string;
    description: string;
    price: string;
    popular: boolean;
  }>;
  onOrderClick: (productName: string) => void;
}

export const StandTypesSection = ({ standTypes, onOrderClick }: StandTypesSectionProps) => (
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
              <Button className="w-full" onClick={() => onOrderClick(type.title)}>
                Заказать
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

interface ProcessSectionProps {
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

export const ProcessSection = ({ process }: ProcessSectionProps) => (
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
);

interface FAQSectionProps {
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSection = ({ faq }: FAQSectionProps) => (
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
);

interface CTASectionProps {
  onOrderClick: () => void;
}

export const CTASection = ({ onOrderClick }: CTASectionProps) => (
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
          onClick={onOrderClick}
        >
          Оставить заявку
        </Button>
        <a href="tel:+74162227803" className="text-xl font-semibold hover:text-primary transition-colors">
          +7 (4162) 22-78-03
        </a>
      </div>
    </div>
  </section>
);

export const SEOTextSection = () => (
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
            <span><strong>Быстрые сроки</strong> — от 2 рабочих дней</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
            <span><strong>Гарантия до 3 лет</strong> — уверены в качестве своей продукции</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
            <span><strong>Доставка и монтаж</strong> — по Амурской области и ДВФО, монтаж в Благовещенске и Амурской области</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
            <span><strong>Разработка макета</strong> — учтём ваш фирменный стиль</span>
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
          Мы предлагаем выгодные условия для постоянных клиентов и при больших объёмах заказа. Работаем по безналичному расчёту. Предоставляем все необходимые документы для бухгалтерии.
        </p>

        <h3 className="font-heading text-2xl font-bold text-secondary mt-8 mb-4">
          Как заказать стенд в Благовещенске
        </h3>
        <p className="mb-4 leading-relaxed">
          Чтобы <strong>заказать стенд</strong>, позвоните нам по телефону <a href="tel:+74162227803" className="text-primary font-semibold">+7 (4162) 22-78-03</a> или оставьте заявку на сайте. Менеджер свяжется с вами, уточнит детали, рассчитает стоимость и при необходимости выедет на замеры. После согласования мы подготовим макет для вашего утверждения и приступим к производству.
        </p>
        <p className="leading-relaxed">
          Готовые стенды доставим в согласованные сроки. Монтаж выполняем в Благовещенске и Амурской области. Выдадим паспорт изделия и гарантию до 3 лет. Обслуживаем клиентов по всей Амурской области и ДВФО: Благовещенск, Белогорск, Тында, Свободный, Хабаровск, Владивосток и другие города.
        </p>
      </div>
    </div>
  </section>
);
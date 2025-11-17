import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Button 
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          На главную
        </Button>

        <h1 className="font-heading text-4xl font-bold text-secondary mb-8">
          Согласие на обработку персональных данных
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-secondary">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении 
              всей информации, которую ООО "Консалт" (далее — Компания) может получить о пользователе во время 
              использования сайта многостендов.рф (далее — Сайт).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и условиями 
              обработки его персональных данных. В случае несогласия с условиями пользователь должен воздержаться 
              от использования Сайта.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">2. Персональные данные пользователей</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Под персональными данными в настоящей Политике понимается:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты (e-mail)</li>
              <li>Информация о компании/организации пользователя</li>
              <li>Иные данные, предоставленные пользователем добровольно</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">3. Цели обработки персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Компания обрабатывает персональные данные пользователя в следующих целях:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Идентификация пользователя</li>
              <li>Связь с пользователем для уточнения деталей заказа</li>
              <li>Предоставление информации о товарах и услугах</li>
              <li>Направление коммерческих предложений и рекламных материалов</li>
              <li>Улучшение качества обслуживания</li>
              <li>Исполнение договорных обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">4. Способы и сроки обработки персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Обработка персональных данных осуществляется с использованием средств автоматизации и без использования 
              таких средств. Персональные данные обрабатываются в течение срока, необходимого для достижения целей 
              обработки, если иное не предусмотрено законом.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Компания принимает необходимые организационные и технические меры для защиты персональных данных 
              от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">5. Передача персональных данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания не передает персональные данные пользователей третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Пользователь явно выразил свое согласие на такие действия</li>
              <li>Передача необходима для исполнения договора с пользователем</li>
              <li>Передача предусмотрена законодательством РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">6. Права пользователя</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Пользователь имеет право:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">7. Изменение политики конфиденциальности</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания имеет право вносить изменения в настоящую Политику. При внесении изменений в актуальной 
              редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента 
              ее размещения на Сайте.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">8. Обратная связь</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Все предложения или вопросы по поводу настоящей Политики следует направлять по контактам:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="font-semibold mb-2">ООО "Консалт"</p>
              <p className="text-muted-foreground">ИНН: 2801227832</p>
              <p className="text-muted-foreground">ОГРН: 1172801001174</p>
              <p className="text-muted-foreground">
                Адрес: Амурская область, г. Благовещенск, ул. Забурхановская, 98, оф. 4
              </p>
              <p className="text-muted-foreground mt-3">
                Email: <a href="mailto:mnogo.info@mail.ru" className="text-primary hover:underline">mnogo.info@mail.ru</a>
              </p>
              <p className="text-muted-foreground">
                Телефон: <a href="tel:+74162227803" className="text-primary hover:underline">+7 (4162) 22-78-03</a>
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic mt-8">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
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
          Пользовательское соглашение
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-secondary">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между ООО "Консалт" 
              (далее — Компания) и пользователем сайта многостендов.рф (далее — Сайт).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Используя Сайт, вы соглашаетесь с условиями настоящего Соглашения. Если вы не согласны с какими-либо 
              условиями, пожалуйста, не используйте Сайт.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">2. Предмет соглашения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания предоставляет пользователю доступ к информации о товарах и услугах, размещенных на Сайте, 
              а также возможность оформления заказов на производство выставочных стендов и рекламной продукции.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">3. Права и обязанности сторон</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">3.1. Компания обязуется:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Предоставлять актуальную информацию о товарах и услугах</li>
                  <li>Обеспечивать конфиденциальность персональных данных пользователей</li>
                  <li>Своевременно обрабатывать заявки и запросы пользователей</li>
                  <li>Выполнять принятые обязательства в соответствии с условиями договора</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3.2. Пользователь обязуется:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Предоставлять достоверную информацию при оформлении заказа</li>
                  <li>Не использовать Сайт в незаконных целях</li>
                  <li>Соблюдать условия настоящего Соглашения</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">4. Оформление заказа</h2>
            <p className="text-muted-foreground leading-relaxed">
              Заказ оформляется путем заполнения формы на Сайте или путем обращения по указанным контактам. 
              После получения заявки представитель Компании свяжется с пользователем для уточнения деталей заказа 
              и согласования условий сотрудничества.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">5. Интеллектуальная собственность</h2>
            <p className="text-muted-foreground leading-relaxed">
              Все материалы, размещенные на Сайте, включая текстовые, графические, фото- и видеоматериалы, 
              являются объектами интеллектуальной собственности Компании и защищены законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">6. Ответственность</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания не несет ответственности за убытки, возникшие в результате использования или невозможности 
              использования Сайта, за исключением случаев, прямо предусмотренных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">7. Изменение условий соглашения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания оставляет за собой право в любое время изменять условия настоящего Соглашения. 
              Изменения вступают в силу с момента их публикации на Сайте.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">8. Реквизиты компании</h2>
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

export default TermsOfService;

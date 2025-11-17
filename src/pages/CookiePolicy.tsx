import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const CookiePolicy = () => {
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
          Политика использования cookie
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-secondary">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">1. Что такое cookie?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете или мобильном телефоне) 
              при посещении веб-сайтов. Они помогают сайту запомнить информацию о вашем визите, что делает последующие посещения более удобными.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">2. Для чего мы используем cookie?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Мы используем cookie для следующих целей:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Обеспечение базовой функциональности сайта</li>
              <li>Анализ трафика и поведения пользователей для улучшения качества сервиса</li>
              <li>Запоминание ваших предпочтений и настроек</li>
              <li>Персонализация контента и рекламы</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">3. Типы используемых cookie</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Обязательные cookie</h3>
                <p className="text-muted-foreground">
                  Необходимы для базовой работы сайта. Без них сайт не сможет функционировать должным образом.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Аналитические cookie</h3>
                <p className="text-muted-foreground">
                  Помогают нам понять, как посетители взаимодействуют с сайтом, собирая анонимную информацию.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Функциональные cookie</h3>
                <p className="text-muted-foreground">
                  Позволяют сайту запоминать ваши предпочтения и улучшать ваш опыт использования.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">4. Управление cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Вы можете контролировать и/или удалять cookie по своему усмотрению. Большинство браузеров позволяют отклонять все cookie 
              или принимать только определенные cookie. Однако, если вы заблокируете все cookie, некоторые функции сайта могут работать некорректно.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-4">5. Контактная информация</h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="font-semibold mb-2">ООО "Консалт"</p>
              <p className="text-muted-foreground">ИНН: 2801227832</p>
              <p className="text-muted-foreground">ОГРН: 1172801001174</p>
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

export default CookiePolicy;

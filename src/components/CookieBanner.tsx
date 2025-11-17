import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl z-50 animate-slide-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Icon name="Cookie" size={24} className="text-primary shrink-0 mt-1" />
            <div className="text-sm text-secondary">
              <p className="mb-2">
                Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.
              </p>
              <p className="text-xs text-muted-foreground">
                Продолжая использовать сайт, вы соглашаетесь с{' '}
                <a href="/cookie-policy" className="text-primary hover:underline">
                  Политикой использования cookie
                </a>
              </p>
            </div>
          </div>
          <Button 
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90 text-white shrink-0"
          >
            Принять
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

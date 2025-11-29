import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface OrderFormProps {
  mode?: 'section' | 'modal';
  isOpen?: boolean;
  onClose?: () => void;
  productName?: string;
  subject?: string;
}

const OrderForm = ({ 
  mode = 'section', 
  isOpen = false, 
  onClose, 
  productName,
  subject 
}: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    if (mode === 'section') {
      const handleCalculatorMessage = (event: CustomEvent) => {
        setFormData(prev => ({ ...prev, message: event.detail.message }));
      };

      window.addEventListener('calculatorMessage' as any, handleCalculatorMessage);
      return () => {
        window.removeEventListener('calculatorMessage' as any, handleCalculatorMessage);
      };
    }
  }, [mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const requestBody = subject 
        ? { ...formData, subject }
        : formData;

      const response = await fetch('https://functions.poehali.dev/703cd412-15d0-44b2-b370-dff8f8271320', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        if (mode === 'modal' && onClose) {
          setTimeout(() => {
            onClose();
            setSubmitStatus('idle');
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className={mode === 'section' ? 'space-y-6' : 'space-y-4 mt-4'}>
      <div>
        <label className="block text-sm font-medium mb-2 text-secondary">
          Ваше имя
        </label>
        <Input 
          placeholder="Иван Иванов"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className={mode === 'section' ? 'h-12' : 'h-10'}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-secondary">
          Email
        </label>
        <Input 
          type="email"
          placeholder="ivan@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className={mode === 'section' ? 'h-12' : 'h-10'}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-secondary">
          Телефон
        </label>
        <Input 
          type="tel"
          placeholder="+7 (999) 123-45-67"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className={mode === 'section' ? 'h-12' : 'h-10'}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-secondary">
          {mode === 'section' ? 'Описание проекта' : 'Комментарий'}
        </label>
        <Textarea 
          placeholder={mode === 'section' ? 'Расскажите о ваших требованиях к стенду...' : 'Опишите ваши пожелания...'}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={mode === 'section' ? 5 : 3}
          required={mode === 'section'}
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className={`bg-green-50 text-green-700 ${mode === 'section' ? 'p-4' : 'p-3'} rounded-lg flex items-center gap-2 ${mode === 'modal' ? 'text-sm' : ''}`}>
          <Icon name="CheckCircle" size={mode === 'section' ? 20 : 18} />
          <span>{mode === 'section' ? 'Заявка успешно отправлена! Мы свяжемся с вами в течение рабочего дня.' : 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'}</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className={`bg-red-50 text-red-700 ${mode === 'section' ? 'p-4' : 'p-3'} rounded-lg flex items-center gap-2 ${mode === 'modal' ? 'text-sm' : ''}`}>
          <Icon name="AlertCircle" size={mode === 'section' ? 20 : 18} />
          <span>{mode === 'section' ? 'Ошибка отправки. Попробуйте позже или свяжитесь по телефону.' : 'Ошибка отправки. Попробуйте позже.'}</span>
        </div>
      )}
      
      <div className={`flex items-start gap-${mode === 'section' ? '3' : '2'} ${mode === 'section' ? 'p-4' : 'p-3'} bg-muted/30 rounded-lg`}>
        <Checkbox 
          id={mode === 'section' ? 'consent' : 'modal-consent'} 
          checked={consentChecked}
          onCheckedChange={(checked) => setConsentChecked(checked === true)}
          className={mode === 'section' ? 'mt-1' : 'mt-0.5'}
        />
        <label htmlFor={mode === 'section' ? 'consent' : 'modal-consent'} className={`${mode === 'section' ? 'text-sm' : 'text-xs'} text-muted-foreground ${mode === 'section' ? 'leading-relaxed' : 'leading-snug'} cursor-pointer`}>
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Политике конфиденциальности
          </a>.
        </label>
      </div>
      
      <Button 
        type="submit" 
        size={mode === 'section' ? 'lg' : undefined}
        className={`w-full ${mode === 'section' ? 'h-12 text-lg' : 'h-10'} bg-primary hover:bg-primary/90 text-white`}
        disabled={isSubmitting || !consentChecked}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
      </Button>
    </form>
  );

  if (mode === 'modal') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-secondary">Узнать цену</DialogTitle>
            {productName && (
              <DialogDescription>
                {productName}
              </DialogDescription>
            )}
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section id="order" className="py-12 sm:py-20 px-4 sm:px-6 bg-background" aria-label="Форма заказа">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-secondary break-words px-2">
          Оставить заявку
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base md:text-lg px-4 leading-relaxed">
          Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
        </p>
        
        <Card className="shadow-xl border-none">
          <CardContent className="p-8">
            <FormContent />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;

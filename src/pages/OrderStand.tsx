import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductOrderModal from '@/components/ProductOrderModal';
import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { advantages, standTypes, process, faq } from '@/data/orderStandData';
import {
  HeroSection,
  AdvantagesSection,
  StandTypesSection,
  ProcessSection,
  FAQSection,
  CTASection,
  SEOTextSection
} from '@/components/OrderStandSections';

const OrderStand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  useSchemaOrg();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openOrderModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection onOrderClick={() => openOrderModal('Заказать стенд в Благовещенске')} />
      <AdvantagesSection advantages={advantages} />
      <StandTypesSection standTypes={standTypes} onOrderClick={openOrderModal} />
      <ProcessSection process={process} />
      <FAQSection faq={faq} />
      <CTASection onOrderClick={() => openOrderModal('Заказать стенд в Благовещенске')} />
      <SEOTextSection onOrderClick={openOrderModal} />

      <Footer />
      
      <ProductOrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default OrderStand;
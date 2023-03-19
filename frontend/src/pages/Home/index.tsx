import { useEffect } from 'react';
import ContactMeSection from '../../components/ContactMeSection';
import HomeMain from '../../components/HomeMain';
import ServicesSection from '../../components/ServicesSection';

const Home = () => {
  useEffect(() => {
    document.title = 'La Barber | HOME';
  }, []);
  return (
    <>
      <HomeMain />
      <ServicesSection />
      <ContactMeSection />
    </>
  );
};

export default Home;

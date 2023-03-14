import Footer from '../../components/Footer';
import HomeMain from '../../components/HomeMain';
import Navbar from '../../components/Navbar';
import ServicesSection from '../../components/ServicesSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeMain />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;
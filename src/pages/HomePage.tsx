
import Header from '../components/Header';
import PetSection from '../components/PetSection';
import DonationForm from '../components/DonationForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <Header />
        </div>
      </div>
      
      <main className="flex-grow container mx-auto">
        <PetSection />
        <DonationForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;

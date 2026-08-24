import BookingPreview from './components/BookingPreview';
import DestinationShowcase from './components/DestinationShowcase';
import ExperienceStory from './components/ExperienceStory';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import TripPlanner from './components/TripPlanner';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <BookingPreview />
        <DestinationShowcase />
        <ExperienceStory />
        <Testimonials />
        <TripPlanner />
      </main>
      <Footer />
    </>
  );
}

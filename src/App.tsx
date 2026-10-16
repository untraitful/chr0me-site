import Hero from './components/Hero';
import Tests from './components/Tests';
import Features from './components/Features';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main id="top">
        <Hero />
        <Tests />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

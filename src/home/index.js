import { useEffect } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import About from './components/about';
import ClassificationGuide from './components/classificationGuide';
import Danger from './components/danger';
import Faq from './components/faq';
import Hero from './components/hero';
import Impact from './components/impact';
import Type from './components/type';
import { ParallaxProvider } from 'react-scroll-parallax';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({
      startEvent: 'DOMContentLoaded',
    });
  });
  return (
    <ParallaxProvider>
      {/* Navigasi */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* Tentang */}
      <About />
      {/* Panduan penggunaan klasifikasi */}
      <ClassificationGuide />
      {/* Bahaya sampah */}
      <Danger />
      {/* Jenis sampah */}
      <Type />
      {/* Dampak sampah */}
      <Impact />
      {/* FAQ */}
      <Faq />
      {/* Footer */}
      <Footer />
    </ParallaxProvider>
  );
}

export default Home;

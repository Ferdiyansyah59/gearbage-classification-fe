import Footer from '../../components/footer';
import Nav from '../../components/nav';
import About from './about';
import Danger from './danger';
import Faq from './faq';
import Impact from './impact';
import { useLocation } from 'react-router-dom';
import Type from './type';
function Components() {
  const path = useLocation().pathname;

  return (
    <div>
      <Nav />
      <div className='pt-32'>
        {path == '/tentang' ? (
          <About />
        ) : path == '/faq' ? (
          <Faq />
        ) : path == '/bahaya' ? (
          <Danger />
        ) : path == '/jenis' ? (
          <Type />
        ) : path == '/dampak' ? (
          <Impact />
        ) : (
          ''
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Components;

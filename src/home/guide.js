import desktop from '../assets/img/guide-desktop.png';
import mobile from '../assets/img/guide-mobile.png';
import Footer from '../components/footer';
import Nav from '../components/nav';

function Guide() {
  return (
    <div className='App overflow-hidden'>
      <Nav />
      <div className='px-5 md:px-20 py-20'>
        <img
          className='hidden md:block my-14'
          src={desktop}
          alt='guide'
        />
        <img
          className='md:hidden my-14'
          src={mobile}
          alt='guide'
        />
      </div>
      <Footer />
    </div>
  );
}

export default Guide;

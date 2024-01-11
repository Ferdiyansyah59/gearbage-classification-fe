import { Link } from 'react-router-dom';
import heroimage from '../../assets/img/HeroImage.png';
import { Parallax } from 'react-scroll-parallax';

function Hero() {
  const logo = { fontFamily: "'Fjalla One', sans-serif" };
  // const dangerImg = require('./HeroImage.png');

  return (
    <section className='bg-footer pt-20 lg:pt-32'>
      <Parallax translateY={[-100, 30]}>
        <div className='flex-wrap text-center  mx-auto'>
          <h1
            style={logo}
            className='text-3xl md:text-6xl pt-16 pb-8 text-white'
          >
            DaurUlang.in
          </h1>
        </div>
      </Parallax>
      <div className='flex flex-col-reverse md:flex-col bg-white rounded-t-[2rem]'>
        <div>
          <div>
            <p className='text-center font-semibold text-s mt-5 text-sm md:text-base '>
              Kurangi, Daur Ulang, dan Bangun Masa Depan yang Bersih.
            </p>
          </div>
          <div className='justify-center flex mt-6 md:w-full'>
            <Link
              style={{ zIndex: '1' }}
              to='/klasifikasi'
            >
              <button className='object-center bg-[#323516] text-white rounded-3xl text-lg px-10 py-1 font-semibold '>
                KLASIFIKASI
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-20 md:mt-0'>
          <img
            src={heroimage}
            style={{ transform: 'translateY(-3rem)', zIndex: '0' }}
            className='m-auto w-4/5 mt-10 lg:mt-0 xl:w-auto xl:h-[60vh] object-cover'
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;

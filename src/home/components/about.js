import { useEffect } from 'react';
import tentang from '../../assets/img/about.png';
import Aos from 'aos';
import { useLocation } from 'react-router-dom';
function About() {
  const path = useLocation().pathname;

  const a = (
    <section className='flex flex-col-reverse md:flex-row z-10 pb-20 bg-white justify-center items-center'>
      <div
        data-aos='fade-right'
        data-aos-duration='800'
        className='w-4/5 mt-10 md:mt-0 md:w-2/5'
      >
        <h1 className='font-bold text-2xl md:text-3xl mb-3 text-[#323516]'>
          TENTANG
        </h1>
        <p className='text-sm'>
          DaurUlang.in merupakan website yang digunakan untuk memudahkan kita
          dalam mengklasifikasikan berbagai sampah.
        </p>
      </div>
      <img
        data-aos='fade-left'
        data-aos-duration='800'
        src={tentang}
        className='w-4/5 md:w-1/2 lg:h-1/2 xl:w-auto xl:h-[60vh]  object-cover'
      />
    </section>
  );

  const b = (
    <section className='flex flex-col-reverse md:flex-row z-10 pb-20 bg-white justify-center items-center'>
      <div className='w-4/5 mt-10 md:mt-0 md:w-2/5'>
        <h1 className='font-bold text-2xl md:text-3xl mb-3 text-[#323516]'>
          TENTANG
        </h1>
        <p className='text-sm'>
          DaurUlang.in merupakan website yang digunakan untuk memudahkan kita
          dalam mengklasifikasikan berbagai sampah.
        </p>
      </div>
      <img
        src={tentang}
        className='w-4/5 md:w-1/2 lg:h-1/2 xl:w-auto xl:h-[60vh]  object-cover'
      />
    </section>
  );

  return path == '/' ? a : b;
}

export default About;

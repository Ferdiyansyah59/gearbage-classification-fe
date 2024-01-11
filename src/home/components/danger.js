import { Link } from 'react-router-dom';
import danger from '../../assets/img/danger.png';
import { useLocation } from 'react-router-dom';
function Danger() {
  const path = useLocation().pathname;
  return (
    <div className='px-5 flex flex-col items-center md:px-0 bg-white'>
      {path == '/' ? (
        <Link
          to='/panduan'
          className='bg-battery -mt-4 text-white text-base px-20 py-1 z-10 w-fit rounded-full'
        >
          Selengkapnya
        </Link>
      ) : (
        ''
      )}
      <div className='flex pt-20  flex-col md:flex-row justify-center items-center'>
        <img
          className='sm:w-2/4 md:w-2/5 2xl:w-2/6'
          src={danger}
          alt=''
        />
        <div className='md:-ml-20 flex flex-col justify-center items-center '>
          <h1 className='text-3xl md:text-4xl font-bold -mb-4 md:-ml-4 text-center z-10'>
            BAHAYA SAMPAH
          </h1>
          <div className='bg-secondary w-full sm:w-4/5 md:w-72 p-8 rounded-md text-sm 2xl:text-base z-0'>
            <p>
              Sampah plastik sangat berbahaya bagi lingkungan. Sampah plastik
              dapat menyebabkan terjadinya pencemaran tanah karena sifatnya yang
              sulit terdekomposisi, sehingga sangat berbahaya bagi makhluk hidup
              yang tinggal di sekitarnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Danger;

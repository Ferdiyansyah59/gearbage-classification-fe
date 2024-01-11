import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const nav = document.getElementById('nav').classList;
      if (scroll > 200) {
        nav.add('shadow-md');
      } else {
        nav.remove('shadow-md');
      }
    });
  });

  return (
    <nav
      id='nav'
      className='w-screen fixed flex flex-col lg:flex-row items-center overflow-hidden bg-footer z-50 justify-between lg:px-20 py-4'
    >
      <section className='flex justify-between items-center w-full px-5 lg:px-0 lg:w-fit'>
        <Link to='/'>
          <img
            className='h-8'
            src={logo}
            alt='Logo'
          />
        </Link>
        <button
          type='button'
          onClick={() => setIsOpen(true)}
          className={`${isOpen ? 'hidden' : ''} lg:hidden`}
        >
          <RxHamburgerMenu className='text-3xl text-white' />
        </button>
        <button
          type='button'
          onClick={() => setIsOpen(false)}
          className={`${isOpen ? '' : 'hidden'} lg:hidden`}
        >
          <RxCross1 className='text-3xl text-white' />
        </button>
      </section>
      <section
        className={`${
          isOpen ? 'flex' : 'hidden'
        } lg:flex  text-white mt-10 lg:mt-0 w-full lg:w-fit`}
      >
        <section className={`flex flex-col lg:flex-row w-1/2 gap-8 ml-10 `}>
          <Link
            to='/'
            className={`${
              isOpen && path == '/'
                ? 'active'
                : !isOpen && path == '/'
                ? 'active-lg'
                : ''
            } p-2 lg:p-0`}
          >
            Beranda
          </Link>
          <Link
            to='/tentang'
            className={`${
              isOpen && path == '/tentang'
                ? 'active'
                : !isOpen && path == '/tentang'
                ? 'active-lg'
                : ''
            } p-2 lg:p-0`}
          >
            Tentang
          </Link>
          <Link
            to='/klasifikasi'
            className={`${
              isOpen && path == '/klasifikasi'
                ? 'active'
                : !isOpen && path == '/klasifikasi'
                ? 'active-lg'
                : ''
            } p-2 lg:p-0`}
          >
            Klasifikasi
          </Link>
          <Link
            to='/faq'
            className={`${
              isOpen && path == '/faq'
                ? 'active'
                : !isOpen && path == '/faq'
                ? 'active-lg'
                : ''
            } p-2 lg:p-0`}
          >
            FAQ
          </Link>
        </section>
      </section>
    </nav>
  );
}

export default Nav;

//  <div className='flex md:flex-row justify-between items-center h-24 mx-auto text-white'>
//       <nav className='flex justify-between w-screen p-10 bg-[#8B9E70] md:flex-row'>
//         <img src="" alt="" />
//         <ul className='md:flex hidden'>
//           <li className='flex mt-8 mx-5 font-bold text-sm'>
//             <Link to='/'>Beranda</Link>
//           </li>
//           <li className='flex mt-8 mx-5 font-bold text-sm'>
//             <a href='/./#about'>Tentang</a>
//           </li>
//           <li className='flex mt-8 mx-5 font-bold text-sm'>
//             <Link to='/klasifikasi'>Klasifikasi</Link>
//           </li>
//           <li className='flex mt-8 mx-5 font-bold text-sm'>
//             <Link to='/'>FAQ</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>

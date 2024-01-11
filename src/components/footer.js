import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='w-full bg-[#565F3A] text-white200 mt-20'>
      <section className='flex flex-col md:flex-row md:items-center justify-evenly gap-5 pl-8 md:pl-0 md:gap-20 py-14 text-sm'>
        <div className='grid gap-5'>
          <Link to='/tentang'>Tentang</Link>
          <Link to='/panduan'>Cara Penggunaan</Link>
        </div>
        <div className='grid gap-5'>
          <Link to='/bahaya'>Bahaya Sampah</Link>
          <Link to='/jenis'>Jenis Sampah</Link>
        </div>
        <div className='grid gap-5'>
          <Link to='/dampak'>Dampak</Link>
          <Link to='/faq'>FAQ</Link>
        </div>
      </section>
      <section className='px-5 md:px-24 py-5 flex justify-between items-center border-t border-white'>
        <Link
          className='xl:text-xl'
          style={{ fontFamily: "'Fjalla One', sans-serif" }}
          to='/'
        >
          DaurUlang.in
        </Link>
        <p className='text-xs md:text-sm '>All right reserved © Kelompok 1 </p>
      </section>
    </footer>
  );
}

export default Footer;

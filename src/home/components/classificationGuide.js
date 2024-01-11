import gambar1 from '../../assets/img/1.png';
import gambar2 from '../../assets/img/2.png';
import gambar3 from '../../assets/img/3.png';
// import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
function ClassificationGuide() {
  const container = {
    fontFamily: "'Poppins', sans-serif",
    color: '#323516',
    // marginTop: '5vh',
    // marginBottom: '15vh',
    alignItems: 'center',
  };

  const data = [
    {
      img: gambar1,
      title: '1. Pilih Gambar',
      desc: 'Pilih gambar yang ingin klasifikasikan.',
    },
    {
      img: gambar2,
      title: '2. Klasifikasikan',
      desc: 'Machine Learning akan mengklasifikasikan sampah yang dipilih.',
    },
    {
      img: gambar3,
      title: '3. Hasil Klasifikasi',
      desc: 'Ditampilkan berupa jenis, cara membuang, cara mendaur ulang, dampak positif dan negatf dari sampah tersebut.',
    },
  ];

  return (
    <section
      style={container}
      className='bg-primary py-10 relative -z-10'
    >
      <div
        className='-z-10'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h1 className='text-white font-extrabold text-center text-3xl z-0'>
          CARA PENGGUNAAN
        </h1>
        <div className='flex justify-center flex-col gap-10 lg:gap-0 lg:flex-row items-center mt-5'>
          {data.map((item, i) => {
            return (
              <div
                className='flex items-center'
                key={i}
              >
                <img
                  src={item.img}
                  alt='1'
                  className='h-24'
                />
                <div className='ml-3'>
                  <h1 className='text-white font-semibold text-xl'>
                    {item.title}
                  </h1>
                  <p className='text-sm ml-5 text-primary w-52'>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Parallax
        translateY={[-100, 100]}
        className='flex flex-col items-center -z-10'
      ></Parallax> */}
    </section>
  );
}

export default ClassificationGuide;

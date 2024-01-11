import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';
import icon5 from '../../assets/img/icon5.png';
import icon6 from '../../assets/img/icon6.png';
import icon7 from '../../assets/img/icon7.png';
import icon8 from '../../assets/img/icon8.png';

function Type() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const data = [
    {
      title: 'Plastik',
      img: icon1,
      desc: 'Semua barang bekas atau tidak terpakai yang materialnya diproduksi dari bahan kimia tak terbarukan.',
    },
    {
      title: 'Kayu',
      img: icon2,
      desc: 'Buangan dari proses produksi kayu yang dapat berupa serpihan atau sisa potongan kayu.',
    },
    {
      title: 'Baterai',
      img: icon3,
      desc: 'Sampah B3 karena mengandung berbagai logam berat, seperti merkuri, mangan, timbal, cadmium, nikel dan lithium.',
    },
    {
      title: 'Styrofoam',
      img: icon4,
      desc: 'Sampah styrofoam adalah limbah padat ringan dari polistirena ekspandid yang sulit terurai dan berkontribusi pada pencemaran lingkungan, terutama di perairan.',
    },
    {
      title: 'Organik',
      img: icon5,
      desc: 'Sampah organik adalah sisa-sisa bahan organik seperti sisa makanan dan tumbuhan yang dapat terurai secara alami melalui proses kompos atau dekomposisi.',
    },
    {
      title: 'Metal',
      img: icon6,
      desc: 'Sampah metal adalah limbah padat yang terdiri dari logam, seperti aluminium dan besi. Dapat didaur ulang untuk mengurangi dampak lingkungan dan ketersediaan sumber daya.',
    },
    {
      title: 'Kertas',
      img: icon7,
      desc: 'Sampah kertas adalah limbah padat dari bahan serat kayu yang dapat didaur ulang. Daur ulang kertas membantu mengurangi penebangan pohon dan mendukung keberlanjutan lingkungan.',
    },
    {
      title: 'Kardus',
      img: icon8,
      desc: 'Sampah kardus adalah limbah padat berbasis karton yang umumnya digunakan untuk kemasan. Daur ulang kardus mendukung upaya ramah lingkungan dalam pengelolaan limbah. ',
    },
  ];
  return (
    <section className='bg-primary h-max place-content-center pb-8 my-20'>
      <h1 className='text-white font-bold text-center text-3xl py-8'>
        JENIS SAMPAH
      </h1>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='flex justify-center lg:px-20'
      >
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className='bg-battery/60 h-80 w-64 rounded-2xl p-4 my-3 justify-self-center'
            >
              <div className='h-max'>
                <img
                  src={item.img}
                  alt='Plastik'
                  className='m-auto justify-center w-20'
                ></img>
              </div>
              <h1 className='text-[#E6E6E6] font-bold text-center text-2xl py-3'>
                {item.title}
              </h1>
              <p className='text-[#E6E6E6] text-justify text-sm'>{item.desc}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Type;

{
  /* <div className='bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center'>
  <div className='h-max'>
    <img
      src={require('./icon2.png')}
      alt='Plastik'
      className='m-auto justify-center w-[100px]'
    ></img>
  </div>
  <h1 className='text-[#E6E6E6] font-bold text-center text-3xl py-7'>
    Kayu
  </h1>
  <p className='text-[#E6E6E6] text-justify text-xl'>
    Buangan dari proses produksi kayu yang dapat berupa serpihan atau
    sisa potongan kayu.
  </p>
  </div>
  <div className='bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center'>
  <div className='h-max'>
    <img
      src={require('./icon3.png')}
      alt='Plastik'
      className='m-auto justify-center w-[100px]'
    ></img>
  </div>
  <h1 className='text-[#E6E6E6] font-bold text-center text-3xl py-7'>
    Baterai
  </h1>
  <p className='text-[#E6E6E6] text-justify text-xl'>
    Sampah B3 karena mengandung berbagai logam berat, seperti merkuri,
    mangan, timbal, cadmium, nikel dan lithium.
  </p>
  </div>
  <div className='bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center'>
  <div className='h-max'>
    <img
      src={require('./icon3.png')}
      alt='Plastik'
      className='m-auto justify-center w-[100px]'
    ></img>
  </div>
  <h1 className='text-[#E6E6E6] font-bold text-center text-3xl py-7'>
    Baterai
  </h1>
  <p className='text-[#E6E6E6] text-justify text-xl'>
    Sampah B3 karena mengandung berbagai logam berat, seperti merkuri,
    mangan, timbal, cadmium, nikel dan lithium.
  </p>
  </div>
  <div className='bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center'>
  <div className='h-max'>
    <img
      src={require('./icon3.png')}
      alt='Plastik'
      className='m-auto justify-center w-[100px]'
    ></img>
  </div>
  <h1 className='text-[#E6E6E6] font-bold text-center text-3xl py-7'>
    Baterai
  </h1>
  <p className='text-[#E6E6E6] text-justify text-xl'>
    Sampah B3 karena mengandung berbagai logam berat, seperti merkuri,
    mangan, timbal, cadmium, nikel dan lithium.
  </p>
  </div> */
}

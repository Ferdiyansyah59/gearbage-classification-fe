import { Carousel, IconButton } from '@material-tailwind/react';

export function CarouselDefault() {
  return (
    <Carousel
      className='rounded-xl'
      loop='True'
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant='text'
          color='white'
          size='lg'
          onClick={handlePrev}
          className='!absolute top-2/4 left-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant='text'
          color='white'
          size='lg'
          onClick={handleNext}
          className='!absolute top-2/4 !right-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </IconButton>
      )}
    >
      <p className='text-xl'>
        Dampak membuang sampah sembarangan akan merusak pemandangan,
        mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah
        sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari
        lingkungan.
      </p>
      <p className='text-xl'>
        Dampak membuang sampah sembarangan akan merusak pemandangan,
        mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah
        sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari
        lingkungan.
      </p>
      <p className='text-xl'>
        Dampak membuang sampah sembarangan akan merusak pemandangan,
        mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah
        sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari
        lingkungan.
      </p>
    </Carousel>
  );
}

// function Impact() {
//   const container = {
//     fontFamily: "'Poppins', sans-serif",
//     color: "#323516",
//     marginTop: "5vh",
//     marginBottom: "15vh",
//     alignItems: "center",
//     textAlign: "center",
//   };

//   const box = {
//     backgroundColor: "#B5C1A3",
//     margin: "5vh 28% 5vh 28%",
//     textAlign: "justify",
//     textJustify: "inter-word",
//     padding:"5vh 5vh 5vh 5vh",
//   };

//   return (
//     <section style={container}>
//       <h1 className='text-5xl'><strong>DAMPAK</strong></h1>
//       <div className='rounded-2xl' style={box}>
//         <h1 className='text-3xl' style={{textAlign: "center",marginBottom:"5vh"}}><strong>Lingkungan</strong></h1>
//         <CarouselDefault />
//       </div>
//       <div>
//       </div>
//     </section>
//   );
// }

// export default Impact;
function Impact() {
  return (
    <section className='text-primary px-5 md:px-0 mt-4 mb-20 flex flex-col gap-5 items-center justify-center'>
      <h1 className='text-3xl md:text-4xl text-center'>
        <strong>DAMPAK</strong>
      </h1>
      <div className='flex flex-col lg:flex-row px-5 lg:px-20 gap-10'>
        <div className='rounded-xl bg-secondary w-full sm:w-2/3 md:w-1/2 2xl:w-2/5 p-10'>
          <h1 className='text-xl md:text-2xl text-center pb-5'>
            <strong>Lingkungan</strong>
          </h1>
          <p className='text-justify text-sm md:text-base'>
            Dampak membuang sampah sembarangan akan merusak pemandangan,
            mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah
            sampai yang tinggi, mendatangkan berbagai penyakit dan dapat
            mencemari lingkungan.
          </p>
        </div>
        <div className='rounded-xl bg-secondary w-full sm:w-2/3 md:w-1/2 2xl:w-2/5 p-10'>
          <h1 className='text-xl md:text-2xl text-center pb-5'>
            <strong>Kesehatan</strong>
          </h1>
          <p className='text-justify text-sm md:text-base'>
            Dampak membuang sampah sembarangan dapat menyebabkan penyebaran
            penyakit seperti infeksi, diare, masalah kulit, dan sebagainya.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;

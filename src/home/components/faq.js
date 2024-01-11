import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import './faq.css';

const data = {
  title: 'FAQ',
  rows: [
    {
      title: 'Apa itu DaurUlangin?',
      content: `DaurUlang.in adalah website yang dapat digunakan untuk mengklasifikasikan sampah 
berdasarkan kategorinya. Selain fitu terkait klasifikasi tersebut, website DaurUlang.in juga 
memiliki konten edukasi terkait sampah.
`,
    },
    {
      title: 'Bagaimana cara kerja DaurUlang.in?',
      content:
        'Setelah mengunggah gambar sampah, machine learning akan mendeteksi sampah tersebut  berdasarkan jenisnya. Lalu akan ditampilkan cara membuang, cara mendaur ulang, dampak positif, serta dampak negatif dari sampah tersebut.',
    },
    {
      title:
        'Apa saja jenis sampah yang bisa diklasifikasikan pada DaurUlang.in?',
      content: `Jenis sampah yang dapat diklasifikasikan yaitu sampah plastik, sampah kaca, sampah 
kertas, sampah kardus, sampah pakaian, sampah sepatu, sampah logam, sampah organik,
sampah baterai, sampah styrofoam, sampah rumah tangga.
`,
    },
    {
      title: 'Apa manfaat dari DaurUlang.in?',
      content: `Dapat mengklasifikasi sampah, desain website yang responsive, fleksibel, dan
mudah digunakan.
`,
    },
    {
      title:
        'Apakah DaurUlang.in bisa mengklasifikasikan sampah dengan mengunggah video?',
      content: `Untuk saat ini website DaurUlang.in masih belum bisa mengklasifikasi sampah dengan
format video dan hanya bisa menggunakan format file JPG, PNG, JPEG.`,
    },
    // {
    //   title: 'What is the package version',
    //   content: <p>current version is 1.2.1</p>,
    // },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: '#323516',
  rowTitleColor: '#565F3A',
  rowContentTextSize: 'small',
  rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function FaqComponent() {
  return (
    <section className='px-5 md:px-20 faq-style-wrapper'>
      <Faq
        data={data}
        styles={styles}
        config={config}
      />
    </section>
  );
}

export default FaqComponent;

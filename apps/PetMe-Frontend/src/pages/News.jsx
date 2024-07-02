import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsTemplate from '../components/News';

function News() {
  return (
    <>
      <Header />
      <main className="flex pt-[6rem] flex-col w-full justify-center">
        <NewsTemplate />
      </main>
      <Footer />
    </>
  );
}

export default News;

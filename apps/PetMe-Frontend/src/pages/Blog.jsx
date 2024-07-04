import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BlogTemplate } from '../components/Blog';

function Blog() {
  return (
    <>
      <Header />
      <main className="flex pt-[6.25rem] flex-col w-full justify-center">
        <BlogTemplate />
      </main>
      <Footer />
    </>
  );
}

export default Blog;

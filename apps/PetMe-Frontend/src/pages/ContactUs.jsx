import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForms from '../components/Contact';

function ContactUs() {
  return (
    <section className="grid-template h-[100vh]">
      <Header />
      <main className="flex pt-[6rem] flex-col w-full justify-center">
        <ContactForms />
      </main>
      <Footer />
    </section>
  );
}

export default ContactUs;

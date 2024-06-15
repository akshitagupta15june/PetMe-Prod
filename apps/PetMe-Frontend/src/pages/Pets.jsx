import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Pets/Card';
import { Link } from "react-router-dom";

function Pets() {
  let pets = [{
    id:1,
    title:"Rosi",
    location:"Valenia, Spain",
    age:"10",
    gender:"m",
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },{
    id:2,
    title:"Gullu",
    location:"Pune, India",
    age:"4",
    gender:"f",
    image:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },{
    id:3,
    title:"Duk",
    location:"Lonodn",
    age:"13",
    gender:"f",
    image:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },{
    id:4,
    title:"John",
    location:"South Street, USA",
    age:"1",
    gender:"m",
    image:"https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }]
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="w-[80vw] mx-auto my-10">
          {/* title */}
          <div className="text-center text-4xl font-bold mb-10">Ready to meet your friend ?</div>
          {/*Gallery*/}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 space-y-6 sm:space-y-0 sm:gap-8">
            {/* Card */}
          {pets.map(pet => (
            <Link to="/petdetails">
            <Card id={pet.id} title={pet.title} location={pet.location} age={pet.age} gender={pet.gender} image={pet.image} />
            </Link>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
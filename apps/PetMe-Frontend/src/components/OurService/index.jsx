/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ourServiceCover from "../../assets/images/ourServiceCover.jpg";
import Card from "./Card.jsx";
export default function OurService() {
  return (
    <section className="w-full h-full p-6 mb-6">

      {/*title*/}
      <div className="text-4xl font-bold text-center my-10 py-3">Our Service</div>

      <div className="grid sm:grid-cols-3 gap-6 place-items-center">
        {/*c1*/}
        <div className="grid justify-items-end space-y-10">
          <Card title="Adoption Counseling" content="Our experienced team understands that adopting a pet is a significant decision. We offer personalized counseling sessions to help you find the perfect match for your lifestyle, preferences, and needs" />
          <Card title="Matchmaking" content="We believe that the key to a successful adoption is finding the right match. Through careful matchmaking, we consider factors such as temperament, activity level, and compatibility with other pets and family members" />
          <Card title="Health and Wellness" content="The well-being of our animals is our top priority. Before they are available for adoption, all pets receive thorough veterinary examinations, vaccinations, and any necessary medical treatments" />
        </div>
        {/*c2*/}
        <div>
          <div className="h-full">
            <img src={ourServiceCover} className="h-[85vh] w-full object-cover rounded-2xl" alt="Dog Image" />
          </div>
        </div>
        {/*c3*/}
        <div className="grid justify-items-left space-y-10">
          <Card title="Behavioral Support" content="Adjusting to a new home can be challenging for pets, which is why we offer ongoing behavioral support to adopters." />
          <Card title="Post-Adoption Follow-Up" content="Our commitment to our animals doesn't end when they leave our facility. We conduct post-adoption follow-up checks to ensure that both pets and adopters are thriving in their new environment" />
          <Card title="Community Events and Resources" content="Join our vibrant community of pet lovers and enthusiasts! We host regular events, workshops, and educational seminars on topics ranging from pet care basics to advanced training techniques" />
        </div>
      </div>
    </section>
  );
}

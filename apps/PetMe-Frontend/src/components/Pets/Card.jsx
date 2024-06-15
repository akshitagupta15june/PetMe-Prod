import React from 'react';
export default function Card(props) {
  return (
    <div className="rounded-xl p-3 sm:p-6 h-fit space-y-3 border-2 border-white hover:border-amber-400 hover:cursor-pointer">
      {/*Cover Image*/}
      <img className="w-full h-[25vh] object-cover rounded-lg" src={props.image} alt="" />
      {/*title*/}
      <div className="relative left-5 text-xl font-bold"> {props.title} </div>
      {/* Location */}
      <div className="flex items-center space-x-2 relative left-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6m0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88" /></svg>
        <span className="text-sm font-bold text-gray-600">{props.location}</span>
      </div>
      {/* Age */}
      <div className="flex items-center space-x-2 relative left-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" viewBox="0 0 256 256"><path fill="currentColor" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z" /></svg>
        <span className="text-sm font-bold text-gray-600">{props.age} yr</span>
      </div>
      {/* Gender  */}
      <div className="flex items-center space-x-2 relative left-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" viewBox="0 0 32 32"><path fill="currentColor" d="M22 3v2h3.563l-3.375 3.406A6.962 6.962 0 0 0 18 7c-1.87 0-3.616.74-4.938 2.063a6.94 6.94 0 0 0 .001 9.875c.87.87 1.906 1.495 3.062 1.812c.114-.087.242-.178.344-.28a3.45 3.45 0 0 0 .874-1.532a4.906 4.906 0 0 1-2.875-1.407C13.524 16.588 13 15.336 13 14s.525-2.586 1.47-3.53C15.412 9.523 16.664 9 18 9s2.587.525 3.53 1.47A4.956 4.956 0 0 1 23 14c0 .865-.245 1.67-.656 2.406c.096.516.156 1.058.156 1.594c0 .498-.042.99-.125 1.47c.2-.163.378-.348.563-.532C24.26 17.614 25 15.87 25 14c0-1.53-.504-2.984-1.406-4.188L27 6.438V10h2V3zm-6.125 8.25c-.114.087-.242.178-.344.28c-.432.434-.714.96-.874 1.533c1.09.14 2.085.616 2.875 1.406c.945.943 1.47 2.195 1.47 3.53s-.525 2.586-1.47 3.53C16.588 22.477 15.336 23 14 23s-2.587-.525-3.53-1.47A4.948 4.948 0 0 1 9 18c0-.865.245-1.67.656-2.406A8.789 8.789 0 0 1 9.5 14c0-.498.042-.99.125-1.47c-.2.163-.377.348-.563.533C7.742 14.384 7 16.13 7 18c0 1.53.504 2.984 1.406 4.188L6.72 23.875l-2-2l-1.44 1.406l2 2l-2 2l1.44 1.44l2-2l2 2l1.405-1.44l-2-2l1.688-1.686A6.932 6.932 0 0 0 14 25c1.87 0 3.616-.74 4.938-2.063C20.26 21.616 21 19.87 21 18s-.74-3.614-2.063-4.938c-.87-.87-1.906-1.495-3.062-1.812" /></svg>
        <span className="text-sm font-bold text-gray-600">{(props.gender == 'm') ? "Male" : "Female"}</span>
      </div>
    </div>
  )
};

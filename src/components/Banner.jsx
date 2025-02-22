import React from "react";
import { useState } from "react";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://i.ibb.co.com/SXFkgrqj/pedro-bariak-l-VRolx-DY5q0-unsplash.jpg", title: "Journey to Explore World", des: "Explore stunning landscapes and vibrant cultures that will leave you in awe."}, 
  {img: "https://i.ibb.co.com/dsKN6nd5/francesca-hotchin-FN-cedy6-NHA-unsplash.jpg", title: "Beautiful place to visit", des: "Embark on an adventure to breathtaking destinations filled with beauty and wonder."}, 
  {img: "https://i.ibb.co.com/yBxpFKXJ/neom-e-OWabm-CNEdg-unsplash.jpg", title: "Travel to Enrich Your Thoughts", des: "Uncover breathtaking landscapes and rich cultures that transform your perspective."}, 
  {img: "https://i.ibb.co.com/ksshv9Sm/kenny-eliason-C8-HVCiuu8c0-unsplash.jpg", title: "Your Perfect Getaway Awaits", des: "Escape to stunning destinations and create unforgettable memories."}, 
  {img: "https://i.ibb.co.com/Z6LpdtbG/ganapathy-kumar-L75-D18a-Val8-unsplash.jpg", title: "Serenity in Every Journey", des: "Find peace in nature’s wonders and embark on a journey of self-discovery."},];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
  const isSmallScreen = window.innerWidth <= 768;
  return (
      <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>
            {/* text container here */}
            <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img key={inx} src={slide.img}
                            className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                                currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                            } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title}/>
                    ))}
                </div>
            </div>
        </div>
  )};
export default Banner;
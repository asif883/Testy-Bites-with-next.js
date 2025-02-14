"use client"
import React from 'react';

const WelcomeSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 items-center max-w-7xl mx-auto mt-16'>
            <div className='text-center lg:w-1/2'>
                <h1 className="text-5xl font-bold mb-1 font-barlow text-gray-900 uppercase">
                    Welcome to Testy Bites
                </h1>
                <p className='mt-5 font-roboto text-lg text-gray-600'>
                    At Testy Bites, we bring you a delicious fusion of flavors crafted with the freshest ingredients. 
                    Whether you're craving classic favorites or bold new dishes, our menu is designed to satisfy every palate. 
                    Experience a warm ambiance, delightful meals, and exceptional service.
                </p>
                <button className='mt-7 bg-gray-900 text-gray-200 uppercase px-8 py-3 font-semibold font-barlow text-xl hover:bg-white hover:text-gray-950 border-2 border-gray-900'>
                    Read More
                </button>
            </div>

         
            <div className="relative lg:w-1/2 overflow-hidden group">
                <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b3/c1/df/new-menu-2018.jpg?w=600&h=-1&s=1" 
                    alt="image" 
                />
              
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
        </div>
    );
};

export default WelcomeSection;

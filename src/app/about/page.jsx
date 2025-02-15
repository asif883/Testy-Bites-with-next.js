"use client"
import React from "react";

import '../Css/font.css'

const page = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[550px] mb-12">
        <img
          src="/assets/about-banner.jpeg"
          alt="Testy Bites Restaurant"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-barlow font-bold mb-6 uppercase text-gray-100">
              Discover the Story Behind Testy Bites
          </h1>
        </div>
      </div>

       <div className="max-w-7xl mx-auto space-y-16">
        {/* About Us Section */}
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            At <span className="text-[#FFD71B] font-semibold">Testy Bites</span>, we bring the finest flavors to your plate with fresh ingredients, skilled chefs, and a passion for food. 
            Our mission is to offer an unforgettable dining experience with a mix of tradition and innovation.
            </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-100 rounded-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-center">
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
                <p className="mt-2 text-gray-600">We use only the freshest and highest-quality ingredients for our dishes.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Expert Chefs</h3>
                <p className="mt-2 text-gray-600">Our chefs bring years of experience to create delicious, mouth-watering meals.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Cozy Ambience</h3>
                <p className="mt-2 text-gray-600">Enjoy a relaxing dining experience with a warm and inviting atmosphere.</p>
            </div>
            </div>
        </div>

        {/* Our Team Section */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
                <img
                src="https://www.elevaterapidcity.com/images/Article_Photos/Restaurant_Week/Hotel_Alex_Johnson_Downtown_Restaurant_Week_Rapid_City_Chef_Chris_med.jpg"
                alt="Chef Alex"
                className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">Chef Alex Johnson</h3>
                <p className="text-gray-600">Master of gourmet dishes with over 15 years of experience.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <img
                src="https://lecordonbleusunway.com.my/wp-content/uploads/2022/08/Become-A-Master-Chef.jpg"
                alt="Chef Sophia"
                className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">Chef Sophia Lee</h3>
                <p className="text-gray-600">Expert in fusion cuisine and innovative flavors.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGxT_A7RFJxqQ/feedshare-shrink_800/feedshare-shrink_800/0/1722949242522?e=2147483647&v=beta&t=-rRQxho_JLbLvItcczwwzEzb28-4zrZ06dwVA0XvX2g"
                alt="Chef Marco"
                className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">Chef Marco Rossi</h3>
                <p className="text-gray-600">Specializes in authentic Italian and Mediterranean cuisine.</p>
            </div>
            </div>
        </div>
       </div>
    </div>
  );
};

export default page;
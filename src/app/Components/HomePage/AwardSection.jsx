"use client"
import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";


const AwardSection = () => {
    return (
        <div className='mt-16 flex items-center flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-1'>
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold font-barlow uppercase"> Our Award-Winning Culinary Excellence</h1>
                <p className='mt-4 text-gray-600 text-sm lg:text-lg'>We take pride in our commitment to culinary perfection. Recognized for our exceptional flavors, top-quality ingredients, and outstanding service, our restaurant has earned multiple prestigious awards. Experience the taste that sets us apart!</p>
                <img className='mt-8' src="/assets/home-1-awards.jpg" alt="" />
                <div className='mt-10'>
                    <h4 className="text-2xl font-medium font-barlow">Contact Info</h4>
                    <div className='grid grid-cols-2'>
                        <div className='mt-8 gap-4 flex flex-col '>
                            <p className='flex gap-2 items-center font-medium text-gray-600'><FaLocationDot/> 123 road, Mirpur-10, Dhaka</p>

                            <p className='flex gap-2 items-center font-medium text-gray-600'><FaPhone/> +880 1234567890</p>
                            
                        </div>

                        <div className='mt-8 gap-4 flex flex-col'>
                            <p className='flex gap-2 items-center font-medium text-gray-600'><MdEmail/>chef1100@gmail.com</p>

                            <p className='flex gap-2 items-center font-medium text-gray-600'><IoShareSocial/>Social Media Links</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png" alt="" />
            </div>
            
        </div>
    );
};

export default AwardSection;
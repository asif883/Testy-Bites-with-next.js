"use client"
import React from 'react';
import { FaUserFriends } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

const TableBooking = () => {
    return (
        <div className='bg-gray-100 py-8 pl-4'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center'>
                <div className='flex items-center'>
                    <select className="p-[9px] w-64 border-2 border-gray-700">
                        <option>1 Person</option>
                        <option>2 Person</option>
                        <option>3 Person</option>
                        <option>4 Person</option>
                        <option>5 Person</option>
                        <option>6 Person</option>
                        <option>7 Person</option>
                    </select>
                   <p className='p-[12px] text-black border-2 border-gray-700 '><FaUserFriends size={14}/></p>
                </div>
                <p className='text-gray-900 text-xl font-medium'>for</p>
                <div className='flex items-center'>
                    <input type="date" placeholder='Search' className='p-2 w-64 border-2 border-gray-700' />
                </div>
                <p className='text-gray-900 text-xl font-medium'>at</p>
                <div>
                    <input type="time" placeholder='Search' className='p-2 w-64 border-2 border-gray-700' />
                </div>
                <div className='w-64'>
                    <button className='w-full uppercase  py-3 bg-[#FFD71B] font-semibold flex gap-3 items-center justify-center hover:text-white hover:bg-gray-900'>
                        <span><FaHandPointRight size={18}/></span>
                        Book a Table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableBooking;
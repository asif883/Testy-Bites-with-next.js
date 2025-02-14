"use client";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

const TableBooking = () => {
    return (
        <div className="bg-gray-100 py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center">
                {/* Select for number of persons */}
                <div className="flex items-center border-2 border-gray-700">
                    <select aria-label="Select number of persons" className="p-2.5 w-64 bg-white">
                        {[...Array(7)].map((_, index) => (
                            <option key={index}>{index + 1} Person</option>
                        ))}
                    </select>
                    <p className="p-2.5 text-black">
                        <FaUserFriends size={16} />
                    </p>
                </div>

                <p className="text-gray-900 text-xl font-medium">for</p>

                {/* Date Picker */}
                <div className="flex items-center">
                    <input
                        type="date"
                        aria-label="Select date"
                        className="p-2 w-64 border-2 border-gray-700 bg-white appearance-none focus:ring-2 focus:ring-gray-700"
                    />
                </div>

                <p className="text-gray-900 text-xl font-medium">at</p>

                {/* Time Picker */}
                <div>
                    <input
                        type="time"
                        aria-label="Select time"
                        className="p-2 w-64 border-2 border-gray-700 bg-white appearance-none focus:ring-2 focus:ring-gray-700"
                    />
                </div>

                {/* Book Button */}
                <div className="w-64">
                    <button className="w-full uppercase py-3 bg-[#FFD71B] font-semibold flex gap-3 items-center justify-center hover:text-white hover:bg-gray-900 group">
                        <span className="group-hover:text-white">
                            <FaHandPointRight size={18} />
                        </span>
                        Book a Table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableBooking;

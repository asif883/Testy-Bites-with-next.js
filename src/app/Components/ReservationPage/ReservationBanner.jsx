"use client";
import React, { useEffect, useState } from "react";
import '../../Css/font.css'

const ReservationBanner = () => {
    const [bgImage, setBgImage] = useState("");

    useEffect(() => {
        setBgImage(
            "url(https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D)"
        );
    }, []);

    return (
        <div
            className="relative h-[550px] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: bgImage }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase">
                    Reserve Your Table – A Perfect Dining Experience Awaits!
                </h1>
                <p className="text-sm lg:text-lg text-gray-300 max-w-3xl mx-auto">
                    Secure your spot at Testy Bites and indulge in an unforgettable dining experience. Whether it is a
                    family dinner, a romantic date, or a special celebration, we’ve got the perfect table for you.
                </p>
            </div>
        </div>
    );
};

export default ReservationBanner;

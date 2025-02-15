"use client"
import React from 'react';


const OrderBanner = () => {
    return (
        <div className="relative h-[550px] bg-fixed" style={{ backgroundImage: `url(/assets/online-banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="absolute inset-0 bg-black/80"></div> 


            <div className="relative text-center top-1/3 text-white px-6">
                <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase">Order Online – Fresh, Fast & Delicious!</h1>
                    <p className="text-sm lg:text-lg text-gray-300">
                    Enjoy our mouthwatering dishes from the comfort of your home. Browse our menu, place your order effortlessly, <br />and get your favorite meals delivered hot and fresh—quick, easy, and satisfying! 
                    </p>
            </div>
        </div>
    );
};

export default OrderBanner;
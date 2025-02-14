"use client"
import React from 'react';
import '../../Css/font.css'

const MenuBanner = () => {
    return (
         <div className="relative h-[550px] bg-fixed" style={{ backgroundImage: `url(/assets/menu-banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
                    <div className="absolute inset-0 bg-black/80"></div> 
        
        
                    <div className="relative text-center top-1/3 text-white px-6">
                        <h1 className="text-3xl lg:text-4xl font-barlow font-bold mb-6 uppercase">Explore Our Exquisite Menu</h1>
                            <p className="text-sm lg:text-lg text-gray-300">
                            Indulge in a diverse selection of delicious dishes crafted with fresh ingredients and expert techniques.<br /> Experience flavors that leave a lasting impression!
                            </p>
                    </div>
         </div>
    );
};

export default MenuBanner;
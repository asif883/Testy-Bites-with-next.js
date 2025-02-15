"use client"
import React from 'react';
import '../../Css/font.css'

const BlogBanner = () => {
    return (
         <div className="relative h-[550px] bg-fixed" style={{ backgroundImage: `url(/assets/Blog-header-1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
                    <div className="absolute inset-0 bg-black/80"></div> 
        
        
                    <div className="relative text-center top-1/3 text-white px-6">
                        <h1 className="text-3xl lg:text-4xl font-barlow font-bold mb-6 uppercase">Testy Bites Blog</h1>
                            <p className="text-sm lg:text-lg text-gray-300">
                            Explore our latest articles, recipes, and expert food tips to enhance your dining experience.
                            </p>
                    </div>
         </div>
    );
};

export default BlogBanner;
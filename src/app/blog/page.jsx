"use client"
import React from 'react';
import BlogBanner from '../Components/Blog/BlogBanner';
import Articles from '../Components/Blog/Articles';

const page = () => {
    return (
        <div>
            <BlogBanner/>
            <Articles/>
        </div>
    );
};

export default page;
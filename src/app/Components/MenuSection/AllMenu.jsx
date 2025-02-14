"use client"
import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import  Link  from 'next/link';

const menuData = [
    {
      "id": 1,
      "name": "Grilled Chicken Steak",
      "price": "$18.99",
      "type": "Main Course",
      "image": "https://i.ytimg.com/vi/xR6rTrhiZVU/maxresdefault.jpg"
    },
    {
      "id": 2,
      "name": "Margherita Pizza",
      "price": "$14.99",
      "type": "Main Course",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s"
    },
    {
      "id": 3,
      "name": "Caesar Salad",
      "price": "$9.99",
      "type": "Appetizer",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUO7I6p5hcfCMYa6URocjt0M1RzVEsf5fHg&s"
    },
    {
      "id": 4,
      "name": "Tomato Basil Soup",
      "price": "$7.99",
      "type": "Appetizer",
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-22858_12-a8c9d53.jpg?quality=90&resize=440,400"
    },
    {
      "id": 5,
      "name": "Garlic Butter Shrimp",
      "price": "$12.99",
      "type": "Appetizer",
      "image": "https://img-global.cpcdn.com/recipes/29225bef16c30f73/1200x630cq70/photo.jpg"
    },
    {
      "id": 6,
      "name": "BBQ Ribs",
      "price": "$22.99",
      "type": "Main Course",
      "image": "https://www.allrecipes.com/thmb/I2ENWJQG1mb2b5OSXPqQudzlzJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/220987-Baked-BBQ-Baby-Back-Ribs-mfs-041-77a42b0ce0f0424e9aeec2b22664f1aa.jpg"
    },
    {
      "id": 7,
      "name": "Chocolate Lava Cake",
      "price": "$8.99",
      "type": "Dessert",
      "image": "https://rhubarbandcod.com/wp-content/uploads/2022/02/Chocolate-Lava-Cakes-1.jpg"
    },
    {
      "id": 8,
      "name": "Tiramisu",
      "price": "$9.99",
      "type": "Dessert",
      "image": "https://i0.wp.com/mediterraneantaste.com/wp-content/uploads/2023/11/tiramisu-4583.jpg?w=1200&ssl=1"
    },
    {
      "id": 9,
      "name": "Iced Caramel Latte",
      "price": "$5.99",
      "type": "Beverage",
      "image": "https://images.ctfassets.net/v601h1fyjgba/6ITu38zjPd1RUxCxZnOkkN/26e2e4b4c0ffeeacab56648c86c79e7a/15697_Keurig_CafeCreations_Salted_Caramel_Latte_Iced_COMP_Hi__1_.jpg"
    },
    {
      "id": 10,
      "name": "Fresh Orange Juice",
      "price": "$4.99",
      "type": "Beverage",
      "image": "https://www.earthfoodandfire.com/wp-content/uploads/2018/04/Homemade-Orange-Juice.jpg"
    }
  ]
  

const AllMenu = () => {
    return (
        <div className="mt-16 max-w-7xl mx-auto px-4">

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Left Side - Image */}
            <Link href='#' className="md:w-1/2 w-full relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 md:h-48 object-cover transition-all duration-300"
              />
              {/* Black Overlay */}
              
            </Link>

            {/* Right Side - Content */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>

              {/* Type Badge */}
              <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.type}
                </span>
                <FaUtensils className="text-gray-700" />
              </div>

              {/* Price */}
              <div className="mt-4">
                <span className="text-lg font-bold text-gray-700 bg-gray-100 px-4 py-1 rounded-full">
                  {item.price}
                </span>
              </div>

              
            </div>
          </div>
        ))}
        </div>

      </div>
    );
};

export default AllMenu;
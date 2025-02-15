"use client"
import React from 'react';


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

const FoodOrder = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-6">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {menuData.map((item) => (
          <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className='w-72 h-60 object-cover md:rounded-l-xl transition-transform group-hover:scale-105 duration-300'
              src={item.image}
              alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold ">{item.name}</h2>
            <p>Price: {item.price}</p>
            <div className="card-actions justify-end">
              <button className="px-3 py-2 bg-[#FFD71B] text-gray-800 font-semibold hover:text-white hover:bg-gray-700 transition-all duration-200">Order Now</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FoodOrder;

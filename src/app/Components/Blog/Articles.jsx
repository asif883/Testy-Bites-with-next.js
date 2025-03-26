"use client"
import React from 'react';
import { SlNote } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import '../../Css/font.css'
import Link from 'next/link';

const blogData =
[
    { 
      "id" : 1,
      "name": "John Doe",
      "title": "The Secret to Perfect Pasta",
      "date": "2025-03-23",
      "category": "Italian",
      "likes": 120,
      "description": "Pasta is one of the most beloved dishes in the world, but making it perfectly requires skill, technique, and attention to detail. The key to cooking perfect pasta starts with choosing high-quality ingredients, from selecting the right type of flour for homemade pasta to using fresh tomatoes and basil for the perfect sauce. Additionally, the cooking process plays a crucial role. Many people make the mistake of overcooking pasta, leading to a mushy texture. Cooking pasta al dente ensures that it retains its firm bite and absorbs the sauce better. Another essential tip is salting the water before boiling, as it enhances the pasta’s flavor from the inside. Moreover, the method of draining and mixing the pasta with the sauce is crucial. Instead of rinsing the pasta, which removes the starch that helps the sauce cling to it, adding it directly to the pan with the sauce allows it to absorb flavors. Finally, finishing with a drizzle of high-quality olive oil and freshly grated Parmesan cheese elevates the dish. Mastering these techniques will ensure that your pasta is always cooked to perfection, making every bite a delightful experience.",
      "image": "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?ga=GA1.1.2021383816.1706365096&semt=ais_keywords_boost"
    },
    { 
      "id" : 2,
      "name": "Emma Smith",
      "title": "Top 5 Spiciest Dishes in the World",
      "date": "2025-03-20",
      "category": "Spicy",
      "likes": 95,
      "description": "For spice lovers, the thrill of tasting fiery dishes is an adventure. Across the world, different cultures have perfected their own intensely spicy cuisines. One of the spiciest dishes is Phaal Curry from India, which is made with an extreme amount of fiery chili peppers, including the infamous Bhut Jolokia (Ghost Pepper). This dish is not for the faint of heart, as even experienced spice lovers find it overwhelmingly hot. Another famous dish is Sichuan Hot Pot from China, known for its use of Sichuan peppercorns that create a numbing yet intensely spicy sensation. Moving to Latin America, Mexico’s Habanero Salsa is another contender. Habanero peppers are one of the hottest in the world, and when blended into a fresh salsa with lime and tomatoes, they create a dangerously addictive yet scorching heat. In Korea, Buldak, or 'fire chicken,' is coated in an extremely spicy gochujang-based sauce and grilled to perfection. It’s a challenge even for native Koreans. Lastly, the Trinidad Moruga Scorpion Chili Sauce from the Caribbean is made with one of the hottest peppers on Earth, delivering an intense burn that lingers. If you love spicy food, these five dishes are a must-try.",
      "image": "https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?ga=GA1.1.2021383816.1706365096&semt=ais_keywords_boost"
    },
    {
      "id" : 3,
      "name": "Michael Brown",
      "title": "Healthy Breakfast Ideas for a Fresh Start",
      "date": "2025-03-18",
      "category": "Healthy",
      "likes": 85,
      "description": "Starting your day with a nutritious breakfast is essential for maintaining energy levels, boosting metabolism, and improving overall health. A well-balanced breakfast includes a combination of proteins, healthy fats, and fiber to keep you full and satisfied throughout the morning. One great option is a smoothie bowl made with blended fruits, Greek yogurt, and a handful of nuts and seeds for added crunch and nutrition. Another excellent choice is overnight oats, which involve soaking oats in milk or yogurt and adding fruits, chia seeds, and a drizzle of honey. This easy-to-prepare meal is rich in fiber and keeps you energized. If you prefer something savory, avocado toast on whole-grain bread with a poached egg is a perfect option. The healthy fats in avocado combined with the protein in eggs create a nutritious meal. A vegetable-packed omelet is another fantastic breakfast idea, as it provides essential vitamins and minerals. Lastly, incorporating fresh fruit, such as berries, bananas, and oranges, into your breakfast adds natural sweetness and essential nutrients. By making mindful choices, you can enjoy a healthy breakfast that sets the tone for the rest of your day.",
      "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
    },
    {
      "id" : 4,
      "name": "Sophia Lee",
      "title": "Mastering the Art of Sushi Making",
      "date": "2025-03-15",
      "category": "Japanese",
      "likes": 110,
      "description": "Sushi is an iconic Japanese dish that combines simplicity with artistry, and mastering it requires precision and technique. The first step in making sushi is selecting the right ingredients. Freshness is key, especially when choosing fish such as salmon or tuna. The rice, known as sushi rice, must be properly washed, cooked, and seasoned with rice vinegar, sugar, and salt to achieve the perfect texture. The rolling technique also plays a crucial role. Using a bamboo sushi mat, known as a makisu, helps create tight and even rolls. Beginners often start with maki rolls, which are wrapped in seaweed and filled with fish, avocado, cucumber, or other ingredients. Nigiri, which consists of a hand-pressed rice ball topped with fish, requires a delicate balance of rice and topping. Additionally, presentation is vital in sushi making. The arrangement of rolls, garnishes, and even the choice of plate enhances the overall experience. Lastly, serving sushi with the right accompaniments, such as soy sauce, wasabi, and pickled ginger, completes the dish. Mastering these techniques takes time, but with practice, anyone can create beautifully crafted sushi at home.",
      "image": "https://img.freepik.com/free-photo/close-up-hands-preparing-tasty-sushi_23-2148862973.jpg?ga=GA1.1.2021383816.1706365096&semt=ais_keywords_boost"
    },
    {
      "id" : 5,
      "name": "David Miller",
      "title": "Best Street Foods Around the World",
      "date": "2025-03-10",
      "category": "Street Food",
      "likes": 130,
      "description": "Street food is an integral part of many cultures, offering quick, delicious, and affordable meals that reflect a region’s unique flavors. One of the most famous street foods is Mexico’s Tacos al Pastor, made with marinated pork cooked on a vertical spit and served with fresh pineapple, cilantro, and onions. In Thailand, Pad Thai is a beloved dish found at street stalls, featuring stir-fried noodles, shrimp, tofu, peanuts, and a sweet and tangy sauce. Another must-try street food is India’s Pani Puri, a crispy hollow shell filled with spiced water, tamarind chutney, potatoes, and chickpeas. It delivers an explosion of flavors in every bite. If you visit Turkey, don’t miss out on Döner Kebab, a flavorful dish of thinly sliced meat wrapped in flatbread with fresh vegetables and sauces. Finally, Japan’s Takoyaki, or octopus balls, are a popular street snack made from a savory batter filled with diced octopus, topped with bonito flakes and a special takoyaki sauce. These incredible street foods provide a delicious insight into global culinary traditions, making them a must-try for any food enthusiast.",
      "image": "https://img.freepik.com/free-photo/street-food-still-life_23-2151535285.jpg?ga=GA1.1.2021383816.1706365096&semt=ais_keywords_boost"
    }
];


const popularArticles =  [
    {
      "id" : 1 ,
      "image": "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2024/07/11111642/Street-food-scaled.jpeg",
      "title": "Must-Try Street Foods",
      "date": "Mar 15, 2025"
    },
    {
        "id" : 2,
        "image": "https://journal.swaledale.co.uk/wp-content/uploads/2022/03/how-to-cook-Ribeye-Steak.jpg",
        "title": "Perfectly Cooked Steak",
        "date": "Feb 28, 2025"
    },
    {
      "id" : 3,
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/wdp-breakfast-avocadoeggontoast_02095-1-e34ed8c.jpg?quality=90&resize=556,505",
      "title": "Healthy Breakfast Ideas",
      "date": "Jan 20, 2025"
    },
    {
      "id" : 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qytC4oKtyh3Xa6usUbYpYWVOc_C8bJ3UjQ&s",
      "title": "Authentic Italian Pasta",
      "date": "Apr 05, 2025"
    },
    {
      "id" : 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKjsmMtV5zo93zL69hkiYYssrvGXaB7bIpA&s",
      "title": "Wine & Food Pairing",
      "date": "Mar 10, 2025"
    }
];

  
  
const Articles = () => {
    return (
        <div className='px-5 mt-10 max-w-7xl mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-8'>
                    {
                        blogData.map((data, idx) =><div className='mb-12' key={idx}>
                            <div className="relative overflow-hidden group">
                                <img 
                                    className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src={data?.image} 
                                    alt="image" 
                                />
                            
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                            <h1 className='mt-3 mb-2 text-3xl font-semibold font-barlow'>{data?.title}</h1>
                            <div className='flex gap-6 font-medium'>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <SlNote/>
                                    </span>
                                    {data?.name}
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <FaRegHeart/>
                                    </span>
                                    {data?.likes}
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <IoPricetagOutline/>
                                    </span>
                                    {data?.category}
                                </p>
                            </div>
                            <p className='text-gray-600 max-w-4xl mt-3 border-b-2 border-dotted border-gray-900 pb-7'>{data?.description.slice( 0, 300 )}........<a href='#' className='text-blue-500'>read more</a></p> 
                            <div className='mt-8  flex items-center'>
                                <p className='text-gray-900 text-xl font-medium mr-3'>Share</p>
                                <div className='flex gap-2'>
                                    <a href=""><FaFacebook size={22}/></a>
                                    <a href=""><FaInstagram size={22}/></a>
                                    <a href=""><FaYoutube size={22}/></a>
                                    <a href=""><FaTwitter size={22}/></a>
                                    <a href=""><FaLinkedin size={22}/></a>       
                                </div>
                            </div>
                        </div>)
                    }
                    
                </div>

                <div className='col-span-4 ml-10'>
                    <h2 className='text-2xl font-semibold font-barlow uppercase'>Recent Article</h2>
                    <ul className="space-y-3 mt-5 text-gray-600">
                        {
                        blogData?.map((data) => 
                        <li className='border-b border-gray-200 pb-2' key={data?.id}>
                            <Link href={'#'} className="hover:underline flex gap-2 items-center ">
                            <IoIosArrowForward/>
                            {data?.title}
                            </Link>
                        </li> 
                        )
                        }
                    </ul>

                    <h3 className='text-2xl font-semibold font-barlow uppercase my-6 '>Popular Article</h3>
                    <div>
                        {
                            popularArticles?.map((blog) => 
                             <div className='mb-4 flex gap-2 items-center border-b border-gray-200 pb-2' key={blog?.id}>
                                <img className='w-24' src={blog?.image} alt="" />
                                <div className="">
                                    <Link href={'#'} className='text-gray-700 mb-1'>{blog?.title}</Link>
                                    <p className='text-sm text-gray-600'>{blog?.date}</p>
                                </div>
                             </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
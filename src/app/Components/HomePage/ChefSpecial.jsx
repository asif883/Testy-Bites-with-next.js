"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  {
    id: 1,
    name: "Grilled Salmon with Lemon Butter",
    price: 18.99,
    description:
      "Freshly grilled salmon fillet topped with a rich lemon butter sauce, served with roasted vegetables.",
    image:
      "https://hips.hearstapps.com/vidthumb/images/delish-grilled-lemon-butter-salmon-wide-1-1528898035.jpg?crop=1xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 2,
    name: "Garlic Butter Steak",
    price: 22.5,
    description:
      "Juicy, tender steak cooked to perfection and drizzled with flavorful garlic butter sauce and spicy.",
    image:
      "https://www.thespruceeats.com/thmb/8xGhP1b9K9LYLEyRbeyMZYBzpPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steakhouse-garlic-butter-recipe-101899-8_preview-5b0ed96043a10300361904a1.jpeg",
  },
  {
    id: 3,
    name: "Truffle Mushroom Pasta",
    price: 15.99,
    description:
      "Creamy fettuccine pasta infused with truffle oil and sautéed mushrooms, topped with parmesan cheese.",
    image: "https://italianfoodforever.com/wp-content/uploads/2009/10/shroomstruffles.jpg",
  },
  {
    id: 4,
    name: "Spicy Honey Glazed Chicken",
    price: 16.5,
    description:
      "Crispy chicken glazed with a sweet and spicy honey sauce, served with seasoned rice with parmesan cheese.",
    image:
      "https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/superbowl-spicy-honey-glazed-chicken-with-cheesy-bacon-wedges-f74c39b2-a3c05a44.jpg",
  },
  {
    id: 5,
    name: "Classic Margherita Pizza",
    price: 12.99,
    description:
      "Thin-crust pizza topped with fresh basil, mozzarella cheese, and a rich tomato sauce with parmesan cheese.",
    image:
      "https://www.datocms-assets.com/32685/1612796622-classic-margherita-pizza.jpg?auto=format&fit=max&w=1200?fit=crop&w=1080&h=1080",
  },
];

const ChefSpecial = () => {
  return (
    <div
      className="relative mt-16 h-[750px] bg-fixed"
      style={{ backgroundImage: `url(/assets/background-1.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative text-center text-white pt-16 px-6">
        <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase">
          Chef’s Special Picks – Handcrafted with Perfection
        </h1>
        <p className="text-sm lg:text-lg text-gray-300">
          Indulge in our chef’s finest creations, meticulously crafted to bring out the best flavors. Each dish is made with handpicked <br /> ingredients, expert techniques, and a passion for culinary excellence.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="max-w-7xl mx-auto mt-12"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm bg-white overflow-hidden">
               
                <div className="relative group">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold px-3 py-3 rounded-full shadow-md">
                    ${item.price}
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-6 text-center mt-6">
                  <h2 className="text-xl font-bold font-barlow uppercase text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChefSpecial;

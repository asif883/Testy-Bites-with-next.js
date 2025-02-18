"use client"
import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import { usePathname } from 'next/navigation';


const NavBar = () => {

    const pathname = usePathname();

    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/reservation", label: "Reservation" },
      { href: "/menu", label: "Menu" },
      { href: "/order-online", label: "Order Online" },
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
    ];

    return (
        <div className="w-full fixed z-10 bg-black bg-opacity-60  text-white ">
           <div className='navbar max-w-7xl mx-auto'>
            <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow font-barlow">
                        <><Link href='/' className='mb-1'>Home</Link></>
                        <><Link href='/reservation' className='mb-1'>Reservation</Link></>
                        <><Link href='/menu' className='mb-1'>Menu</Link></>
                        <><Link href='/order-online' className='mb-1'>Order Online</Link></>
                       
                        <><Link href='/about' className='mb-1'>About us</Link></>
                        <><Link href='/blog' className=''>Blog</Link></>
                    </ul>
                    </div>
                    <Link href='/' className="font-semibold text-2xl lg:text-4xl font-barlow hover:text-[#FFD71B]">Testy-Bites</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-barlow">
                       {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`px-4 py-2 ${pathname === href ? "text-[#FFD71B]" : "text-white"} hover:text-[#FFD71B]`}
                                >
                                {label}
                             </Link>
                            ))}
                    </ul>
                </div>
                <div className="navbar-end pr-2">
                    <div className='flex items-center'>
                        <input type="text" placeholder='Search' className='p-2 w-20 lg:w-40' />
                        <button className='bg-[#FFD71B] p-3 text-black'><FaSearch size={16}/></button>
                    </div>
                    <div className='ml-2'>        
                        <div className="indicator">
                            <span className="indicator-item bg-[#FFD71B] rounded-badge text-black px-1">0</span>
                            <Link href='/dashboard' className=""><TiShoppingCart size={32}/></Link>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    );
};

export default NavBar;
"use client"

import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsPersonAdd } from "react-icons/bs";
import Link from "next/link";




const Routes = [
  {
    id: 1,
    label: "Overview",
    icon: <LuLayoutDashboard />,
    link: "/dashboard",
  },
  {
    id: 2,
    label: "Orders",
    icon: <BsPersonAdd/>,
    link: "/dashboard/orders",
  },
  {
    id: 3,
    label: "Add Menu",
    icon: <TbListDetails/>,
    link: "/dashboard/add-menu",
  },
  {
    id: 4,
    label: "My Cart",
    icon: <IoFastFoodOutline/>,
    link: "/dashboard/cart",
  },
  {
    id: 5,
    label: "Track Delivery",
    icon: <TbTruckDelivery/>,
    link: "/dashboard/track-delivery",
  },
  {
    id: 6,
    label: "Management",
    icon: <MdOutlineManageAccounts/>,
    link: "/dashboard/management",
  },
];

const Sidebar = () => {
   
  return (
    <div className="p-4">
      <div className="text-center border-b border-gray-300 pb-4">
        <Link href='/' className="text-center text-3xl font-bold text-[#324560] flex gap-1 items-center">
          Testy - Bites
        </Link>
      </div>
      <div className="py-6 space-y-3">
        {Routes.map((route) => (
          <Link href={route.link}
            className="flex items-center gap-2 text-[#444546] font-semibold border border-gray-300 rounded-xl px-5 py-2"
           
            key={route.id}
          >
            {route.icon && <span>{route.icon}</span>}
            {route.label}
          </Link>
        ))}
         <button className="flex items-center gap-2 text-[#444546] font-semibold border border-gray-300 rounded-xl px-5 py-2 w-full">
          <CiLogout/>  Logout
         </button>
      </div>
    </div>
  );
};

export default Sidebar;
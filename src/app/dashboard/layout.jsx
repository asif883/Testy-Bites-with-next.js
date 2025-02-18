import { RiMenu2Line } from "react-icons/ri";
import Sidebar from "../Components/Dashboard/Sidebar";

export const metadata = {
    title: "Dashboard - Testy Bites",
    description: "Manage orders, products, and settings in the Testy Bites dashboard.",
    icons: "/logo.png",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        {/* Main Content */}
        <div className="drawer-content  p-6 w-full">
         <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
             <RiMenu2Line  className="mb-4" size={24}/>
          </label>
          {children}
          
        </div>
  
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="bg-base-200 min-h-full w-80 p-4">
             <Sidebar/>
          </ul>
        </div>
      </div>
    );
  }
  
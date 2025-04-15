import React from 'react';
import { Waves, Settings, User, Menu } from "lucide-react";
import { SearchComponent } from "./index";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur-xl">
      <div className="flex py-2 items-center px-4 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <div className="flex flex-1 items-center">
          <div className="flex items-center space-x-3 group">
            <span className="text-sky-400 transition-all duration-300 group-hover:text-sky-200">
              <Waves size={32} className="drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]" />
            </span>
            <h1 className="text-2xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
                Sky
              </span>
              <span className="bg-gradient-to-r from-sky-200 to-sky-50 bg-clip-text text-transparent ml-1">
                Pulse
              </span>
            </h1>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1  mx-8">
            <div className="relative w-full rounded-xl">
              <SearchComponent />
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center justify-end space-x-4">
          <button className="hidden lg:flex items-center text-sky-300 hover:text-sky-100 px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-sky-800/30">
            <Settings size={20} className="mr-2" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          
          <div className="hidden lg:block h-6 w-px bg-sky-800/50 mx-2" />
          
          <button className="flex items-center text-sky-300 hover:text-sky-100 px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-sky-800/30">
            <User size={20} className="mr-2" />
            <span className="text-sm font-medium">Guest</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Hidden on desktop) */}
      <div className="lg:hidden p-4 border-t border-sky-800/30">
        <div className="rounded-lg bg-sky-900/30 border border-sky-800/50">
          <SearchComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
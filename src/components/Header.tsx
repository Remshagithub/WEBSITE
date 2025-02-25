"use client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "./Humburger";

export default function Header() {
  return (
    <>
      <div className="fixed z-10 top-0 w-full">
        <header className="w-full border-b bg-white h-[60px] md:h-[90px] flex justify-between pr-2 items-center max-w-screen-2xl mx-auto">
          <div className="flex justify-center items-center">
            <SheetSide />
            {/* logo */}
            <h1 className="text-2xl md:text-4xl font-extrabold pl-2">SHOP.CO</h1>
          </div>

          {/* Search Bar */}
          <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full">
            <IoIosSearch className="text-xl" />
            <input
              placeholder="Search for products..."
              className="bg-[#F0F0F0] outline-none w-full h-full rounded-full ml-2"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-2 sm:space-x-4 items-center">
            <IoCartOutline className="text-4xl" />
          </div>
        </header>
      </div>
    </>
  );
}